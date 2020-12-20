import { routeType } from "./types";
import Home from "@/pages/Home/Home";
import Example from "@/pages/Example/Example";

const routes: routeType[] = [
  {
    title: "首页",
    exact: true,
    key: "home",
    path: "/",
    component: Home,
  },
  {
    title: "路由示例",
    exact: true,
    key: "example",
    path: "/example",
    component: Example,
  },
];

export default routes;
