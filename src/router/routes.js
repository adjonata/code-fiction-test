import Login from "@/views/auth";
import Tasks from "@/views/tasks";

export default [
  {
    path: "*",
    name: "auth",
    title: "Acessar",
    component: Login,
  },
  {
    path: "/",
    name: "tasks",
    title: "Tarefas",
    component: Tasks,
  },
];
