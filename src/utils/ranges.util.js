import { addDays, addWeeks, addMonths } from "date-fns";

export default {
  todayAndTomorrow() {
    return [new Date(), addDays(new Date(), 1)];
  },
  thisWeek() {
    return [new Date(), addWeeks(new Date(), 1)];
  },
  thisMonth() {
    return [new Date(), addMonths(new Date(), 1)];
  },
};
