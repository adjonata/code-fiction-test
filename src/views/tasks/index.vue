<template>
  <div class="container-md h-100 d-flex flex-column">
    <Header />
    <Tasks />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "./Header";
import Tasks from "./Tasks";

export default {
  name: "home",
  components: {
    Header,
    Tasks,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["LOGOUT"]),
  },
};
</script>

<style lang="scss" scoped></style>
