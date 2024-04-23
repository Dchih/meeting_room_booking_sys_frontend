const Login = () => import("@/pages/login/LoginComp.vue");
const Home = () => import("@/pages/users/HomeComp.vue");

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
