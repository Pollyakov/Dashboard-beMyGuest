import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserManagemet from "views/UserManagement";

import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import MealsManagement from "views/MealsManagement";
import Logs from "views/Logs";
import StatisticsPage from "views/Statistics/StatisticsPage";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/statistics",
    name: "Statistics",
    icon: "nc-icon nc-chart-pie-36",
    component: StatisticsPage,
    layout: "/admin",
  },
  {
    path: "/user-Management",
    name: "User Management",
    icon: "nc-icon nc-single-02",
    component: UserManagemet,
    layout: "/admin",
  },
  {
    path: "/MealsManagement",
    name: "Meals Management",
    icon: "nc-icon nc-basket",
    component: MealsManagement,
    layout: "/admin",
  },
  {
    path: "/Log-Panel",
    name: "Logs",
    icon: "nc-icon nc-paper",
    component: Logs,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/server-info",
    name: "Server Info",
    icon: "nc-icon nc-alert-circle-i",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "(Maps)",
    icon: "nc-icon",
    component: Maps,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin",
  // },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin",
  //   invisible: true,
  // },
];
export default routes;
