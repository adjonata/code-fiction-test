<template>
  <div class="tasks w-100 d-flex flex-wrap pt-2 pt-md-4">
    <div class="col-12 col-md-4 px-2 mt-4 pt-md-0">
      <TasksForm
        :edit="taskEdit"
        @clear="taskEdit = null"
        @update="$refs.list.getTasks()"
      />
    </div>
    <div class="col-12 col-md-8 px-2 mt-4 mt-md-0">
      <TasksList @edit="taskEdit = $event" ref="list" />
    </div>
  </div>
</template>

<script>
import TasksList from "./parts/TasksList";
import TasksForm from "./parts/TasksForm";

export default {
  name: "tasks",
  components: {
    TasksList,
    TasksForm,
  },
  data() {
    return {
      taskEdit: {},
    };
  },
};
</script>

<style lang="scss" scoped></style>
