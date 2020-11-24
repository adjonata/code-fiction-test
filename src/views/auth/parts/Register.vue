<template>
  <form class="w-100 d-flex flex-column flex align-items-center px-4" @submit.prevent="registerPrepare()">
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
      class="mb-2"
      ref="password"
    />
    <t-input
      v-model="body.email"
      label="E-mail:"
      icon="email"
      class="mb-2"
      ref="email"
      type="email"
    />
    <t-input
      v-model="body.avatar"
      label="Link do avatar (opcional):"
      icon="supervised_user_circle"
      class="mb-3"
    />
    <t-button type="submit" label="Cadastrar" icon-right="send" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import formUtil from "@/utils/form.util.js";

export default {
  name: "register-form",
  data() {
    return {
      body: {
        email: null,
        login: null,
        password: null,
        avatar: null,
      },
    };
  },
  methods: {
    ...mapActions("auth", ["HANDLE_REGISTER"]),

    async registerPrepare() {
      if (!formUtil.verifyForm(this.$refs)) {
        this.$swal({
          icon: "error",
          text: "Preencha os campos corretamente!",
        });
        return;
      }

      await this.HANDLE_REGISTER(this.body);
    },
  },
};
</script>

<style lang="scss" scoped></style>
