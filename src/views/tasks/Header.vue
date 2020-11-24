<template>
  <header
    class="user-header col-12 d-flex flex-nowrap justify-content-between align-items-center"
  >
    <img :src="Icon" alt="Icon.png" class="icon" />
    <div class="d-flex profile justify-content-center align-items-center">
      <span>{{ user.login }}</span>
      <img :src="user.avatar || UserDefault" alt="" />
      <t-button
        icon="logout"
        label="Sair"
        class="ml-3 px-3"
        @click="LOGOUT()"
      />
    </div>
  </header>
</template>

<script>
import Icon from "@/assets/images/icon.png";
import UserDefault from "@/assets/images/user.png";
import { mapActions, mapState } from "vuex";

export default {
  name: "user-header",
  data() {
    return {
      Icon,
      UserDefault,
    };
  },
  computed: {    
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["LOGOUT"]),
  },
};
</script>

<style lang="scss" scoped>
.user-header {
  padding: 15px 0;
}
.icon,
.profile img {
  width: 50px;
}
.profile span {
  color: #ffffff;
  text-transform: uppercase;
  margin-right: 8px;
  font-weight: 500;
}
@media (max-width: 850px) {
  .profile span {
    font-size: 12px;
  }  
}
</style>
