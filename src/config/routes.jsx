import { HomeOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import LayoutAdmin from "../pages/layouts/LayoutAdmin";
import LayoutBasic from "../pages/layouts/LayoutBasic";
//* Admin pages
import { Admin, Signin } from "../pages/admin";
//* User pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Users from "../pages/admin/users";
import MenuWeb from "../pages/admin/menuWeb";
import Courses from "../pages/Courses";
//* Otros pages
import Error404 from "../pages/Error404";
// * rutas
const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: Admin,
        exact: true,
        title: "Home",
        isVisible: true,
        Icon: HomeOutlined,
      },
      {
        path: "/admin/login",
        component: Signin,
        exact: true,
        title: "Home",
        isVisible: false,
      },
      {
        path: "/admin/users",
        component: Users,
        exact: true,
        title: "Usuarios",
        isVisible: true,
        Icon: UserOutlined,
      },
      {
        path: "/admin/menu",
        component: MenuWeb,
        exact: true,
        title: "Menu",
        isVisible: true,
        Icon: MenuOutlined,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        path: "/courses",
        component: Courses,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];
export default routes;
