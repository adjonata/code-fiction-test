import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/* Monitora se a rota necessita de login */
router.beforeEach(async (to, from, next) => {
  const IS_LOGED = await verifyAuth();

  if(to.path === '/' && !IS_LOGED) return next('/auth');
  if(to.path === '/auth' && IS_LOGED) return next('/');

  next();
});

async function verifyAuth() {
  let on = false;

  await store
    .dispatch("auth/IS_LOGED")
    .then((res) => {
      on = res;
    })
    .catch((e) => {
      on = false;
    });

  return on;
}

export default router;
