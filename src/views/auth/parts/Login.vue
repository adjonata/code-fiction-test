<template>
  <form class="w-100 d-flex flex-column flex align-items-center px-4" @submit.prevent="loginPrepare()">
    <t-input
      v-model="body.login"
      label="Usuário:"
      icon="person"
      class="mb-2"
      ref="login"
    />
    <t-input
      v-model="body.password"
      type="password"
      label="Senha:"
      icon="lock"
      class="mb-3"
      ref="password"
    />
    <t-button label="Acessar" icon-right="send" type="submit" />

    <p class="w-100 info pr-3">
      Os registros são armazenados no localStorage e no Vuex, de princípio existe um login hardcode:<br />
      <span>login: admin<br />password: admin</span>
    </p>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import formUtil from "@/utils/form.util.js";

export default {
  name: "login-form",
  data() {
    return {
      body: {
        login: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions("auth", ["HANDLE_LOGIN"]),

    async loginPrepare() {
      if (!formUtil.verifyForm(this.$refs)) {
        this.$swal({
          icon: "error",
          text: "Preencha os campos corretamente!",
        });
        return;
      }

      await this.HANDLE_LOGIN(this.body);
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  color: #3d3b8e;
  border: solid 1px #3d3b8e;
  font-size: 12px;
}
.info span {
  font-weight: 500;
}
</style>