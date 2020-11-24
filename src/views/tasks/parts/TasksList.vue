<template>
  <div class="w-100 d-flex flex-column align-items-center flex-nowrap">
    <t-input
      icon="search"
      label="Pesquisar por título:"
      class="w-60 mb-3"
      v-model="search"
      @input="getTasks()"
      flat
    />

    <Period @change="(range = $event), getTasks()" />

    <div
      class="w-100 d-flex justify-arond flex-wrap px-4 px-md-0 pb-4"
      v-if="filteredTasks.length > 0"
    >
      <TasksItem
        v-for="(item, i) in filteredTasks"
        :key="'item_' + i"
        :task="item"
      >
        <template v-slot:actions="{ task }">
          <t-flat icon="edit" color="#656565" @click="$emit('edit', task)" />
          <t-flat
            icon="delete"
            color="#d93530"
            @click="handleRemove(task.id)"
          />
        </template>
      </TasksItem>
    </div>

    <div
      class="w-100 d-flex flex-column justify-content-center align-items-center py-5 mb-4 no-tasks"
      v-else
    >
      <i class="material-icons">sentiment_very_dissatisfied</i>
      <span> Nenhuma tarefa encontrada </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Period from "./Period";
import TasksItem from "./TasksItem";
import { parseISO, differenceInDays, format } from "date-fns";
import formUtil from "@/utils/form.util.js";

export default {
  name: "task-list",
  components: {
    Period,
    TasksItem,
  },
  data() {
    return {
      range: "*",
      search: "",
      filteredTasks: [],
    };
  },
  computed: {
    ...mapState("tasks", ["user_tasks"]),
    ...mapState("auth", ["user"]),
  },

  mounted() {
    this.getTasks();
  },

  methods: {
    ...mapActions("tasks", ["GET_USER_TASKS", "REMOVE_TASK"]),
    async handleRemove(taskId) {
      const data = {
        taskId,
        userId: this.user.id,
      };

      await this.REMOVE_TASK(data).then(() => {
        this.getTasks();
      });
    },

    async getTasks() {
      await this.GET_USER_TASKS(this.user.id).then((res) => {
        this.filterTasks(res);
      });
    },

    filterTasks(tasks) {
      const filterDate = (val) => {
        if (this.range === "*") return true;
        if (!val.date) return false;

        const dateISO = parseISO(val.date);

        if (
          differenceInDays(dateISO, this.range[0]) >= 0 &&
          differenceInDays(dateISO, this.range[1]) <= 0
        ) {
          return true;
        }

        return false;
      };

      const filterTitle = (val) => {
        if (this.search.length < 1) return true;

        const search = formUtil.searchPrepare(this.search);
        const title = formUtil.searchPrepare(val.title);

        return title.indexOf(search) > -1;
      };

      this.filteredTasks = tasks.filter(filterDate).filter(filterTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
.no-tasks {
  background: rgba(0, 0, 0, 0.025);
}
.no-tasks i {
  font-size: 100px;
  color: #e7e7e7;
}
.no-tasks span {
  font-size: 14px;
  color: #bdbdbd;
  margin-top: 5px;
  font-weight: 500;
  text-transform: uppercase;
}
@media (max-width: 850px) {
  .no-tasks i {
    font-size: 70px;
  }
  .no-tasks span {
    font-size: 13px;
  }
}
</style>
