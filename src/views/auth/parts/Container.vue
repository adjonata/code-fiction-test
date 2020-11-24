<template>
  <div class="form">
    <div class="form-header">
      <span
        :class="['form-change', { active: active === 'login' }]"
        @click="active = 'login'"
      >
        Entrar
      </span>
      <span
        :class="['form-change', { active: active === 'register' }]"
        @click="active = 'register'"
      >
        Cadastrar
      </span>
    </div>

    <div class="form-content">
      <Login v-if="active === 'login'" />
      <Register v-else />
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Register from "./Register.vue";

export default {
  name: "auth-container",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      active: "login",
      login: {
        user: null,
        password: null,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.form {
  width: 100%;
  min-height: 360px;
  background: #fbfbff;
  border-radius: 8px;
  padding: 8px;
}
.form-header {
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-change {
  font-size: 15px;
  padding: 2px 5px;
  margin: 0 10px;
  border-bottom: solid 2px #fbfbff;
  transition: border 0.3s;
  cursor: pointer;
}

.form-change.active {
  border-bottom-color: #3d3b8e;
}

.form-content {
  width: 100%;
  height: calc(100% - 38px);
  display: flex;
  justify-content: center;
  padding-top: 25px;
}

@media (min-width: 992px) {
  .form {
    width: 350px;
  }
}
</style>
