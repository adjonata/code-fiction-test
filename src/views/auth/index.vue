<template>
  <div
    class="d-flex flex-column flex-md-row justify-content-md-center align-items-center w-100" style="height: 100vh;"
  >
    <img :src="Logo" alt="" class="auth-logo"  />
    <AuthContainer class="auth-form" />
  </div>
</template>

<script>
import AuthContainer from "./parts/Container";
import Logo from "@/assets/images/logo.svg";

export default {
  name: "login",
  components: {
    AuthContainer,
  },
  data() {
    return {
      Logo,
    };
  },
};
</script>

<style scoped>
.auth-logo {
  width: 290px;
  margin-right: 80px;
  opacity: 0.9;
}
@media (max-width: 800px) {
  .auth-form {
    width: 80%;
  }
  .auth-logo {
    width: 70px;
    margin-right: 0;
    margin-bottom: 20px;
    margin-top: 30px;
  }
}
</style>
