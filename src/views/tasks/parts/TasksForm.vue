<template>
  <form
    class="w-100 d-flex flex-column flex align-items-center px-4"
    @submit.prevent="taskPrepare()"
  >
    <t-input
      v-model="task.title"
      label="Título:"
      icon="loyalty"
      class="mb-2"
      ref="title"
    />
    <t-textarea
      v-model="task.description"
      label="Descrição"
      icon="import_contacts"
      class="mb-2"
      height="90px"
    />
    <t-input
      v-model="task.date"
      label="Data prevista:"
      icon="calendar_today"
      class="mb-2"
      type="date"
    />
    <t-button
      type="submit"
      label="Criar Tarefa"
      icon="add"
      color="#389657"
      v-if="action === 'create'"
    />

    <div class="w-100 d-flex flex-column" v-else-if="action === 'edit'">
      <t-button label="Salvar" type="submit" color="#389657" icon="save" />
      <t-button
        label="Cancelar"
        icon="clear"
        @click="clearForm"
        color="#bf3030"
        class="mt-2"
      />
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import formUtil from "@/utils/form.util.js";

export default {
  name: "task-form",
  props: {
    edit: Object,
  },
  data() {
    return {
      task: {
        title: null,
        description: null,
        date: null,
      },
      action: "create",
    };
  },
  watch: {
    edit(val) {
      if (val) {
        this.task = formUtil.deepCopy(val);
        this.action = "edit";
        window.scrollTo(0, 0);
      }
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("tasks", ["CREATE_TASK", "EDIT_TASK"]),

    async taskPrepare() {
      if (!formUtil.verifyForm(this.$refs)) {
        this.$swal({
          icon: "error",
          text: "O Título é obrigatório!",
        });
        return;
      }

      if (this.action === "edit") {
        await this.handleEdit();
      } else if (this.action === "create") {
        await this.handleCreate();
      }

      this.clearForm();
    },

    async handleCreate() {
      const data = {
        task: formUtil.deepCopy(this.task),
        userId: this.user.id,
      };

      await this.CREATE_TASK(data).then(() => {        
        this.$emit('update', true);
      });
    },

    async handleEdit() {
      const data = {
        taskId: formUtil.deepCopy(this.task.id),
        userId: this.user.id,
        infos: formUtil.deepCopy(this.task),
      };

      await this.EDIT_TASK(data).then(() => {
        this.$emit('update', true);
      });
    },

    clearForm() {
      this.task = formUtil.clearForm(this.task);
      this.action = "create";
      this.$emit("clear", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
