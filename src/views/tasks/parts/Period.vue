<template>
  <div
    class="tasks-period w-100 d-flex justify-content-center justify-content-md-start align-items-center"
  >
    <t-button
      v-for="(range, iRange) in dateRanges"
      :key="'range_' + iRange"
      :label="range.title"
      class="mx-2 my-1"
      @click="(rangeActive = range.value), $emit('change', range.value)"
      :style="{
        borderBottom: 'solid 1px',
        borderBottomColor: rangeActive === range.value ? '#ffffff' : '#353535',
      }"
    />
  </div>
</template>

<script>
import ranges from "@/utils/ranges.util.js";

export default {
  name: "period",
  data() {
    return {
      filteredTasks: [],
      rangeActive: "*",
    };
  },
  computed: {
    dateRanges() {
      return [
        {
          title: "Todo período",
          value: "*",
        },
        {
          title: "Até amanhã",
          value: ranges.todayAndTomorrow(),
        },
        {
          title: "Até uma semana",
          value: ranges.thisWeek(),
        },
        {
          title: "Até um mês",
          value: ranges.thisMonth(),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.tasks-period {
  flex-wrap: wrap;
  margin: 10px 0 20px;
}
.tasks-period .t-button {
  width: 160px;
}
@media (max-width: 800px) {
  .tasks-period .t-button {
    width: 40%;
    margin: 4px 5%;
  }
}
</style>
