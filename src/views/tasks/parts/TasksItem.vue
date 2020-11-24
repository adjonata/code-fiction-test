<style lang="scss" scoped>
.tasks-item {
  padding: 10px;
  border-radius: 7px;
  border: solid 3px #3d3b8e;
}
.tasks-item .title {
  width: 100%;
  word-wrap: break-word;
  font-size: 14px;
  color: #3d3b8e;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
.tasks-item .title i {
  font-size: 15px;
  margin-right: 3px;
}
.tasks-item .info {
  width: 100%;
  word-wrap: break-word;
  font-size: 14px;
  color: #353535;
}
.tasks-item .info.description {
  min-height: 40px;
  max-height: 150px;
  overflow-y: auto;
}

.tasks-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>

<template>
  <div
    class="tasks-item bg-white col-12 col-md-4 d-flex flex-column"
    v-if="task"
  >
    <span class="title">
      <i class="material-icons">loyalty</i>
      Título
    </span>
    <p class="info">{{ task.title }}</p>

    <span class="title">
      <i class="material-icons">import_contacts</i>
      Descrição
    </span>
    <p class="info description">{{ task.description || "N/A" }}</p>

    <span class="title">
      <i class="material-icons">calendar_today</i>
      Data Prevista
    </span>
    <p class="info">{{ task.date ? formatDate(task.date) : "N/A" }}</p>

    <div
      class="tasks-actions d-flex flex-nowrap"
      v-if="$scopedSlots['actions']"
    >
      <slot name="actions" :task="task" />
    </div>
  </div>
</template>

<script>
import { format, dateISO } from "date-fns";
import { parseISO } from 'date-fns/esm';

export default {
  name: "tasks-item",
  props: {
    task: Object,
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'dd/MM/yy');
    },
  },
};
</script>
