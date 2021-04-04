/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Login from "screens/Login";
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/images",
    name: "Media",
    rtlName: "الرموز",
    icon: "tim-icons icon-image-02",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/places",
    name: "Places",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    rtlName: "إخطارات",
    icon: "tim-icons icon-calendar-60",
    component: Notifications,
    layout: "/admin",
  },
 
  {
    path: "/circuits",
    name: "Circuit",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-map-big",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-bag-16",
    component: Login,
    layout: "/admin",
  },
  {
    path: "/services",
    name: "Services",
    rtlName: "طباعة",
    icon: "tim-icons icon-bullet-list-67",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/guesthouse",
    name: "Guest House",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-attach-87 ",
    component: Rtl,
    layout: "/rtl",
  },
  {
    path: "/contact",
    name: "Contact",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-badge",
    component: Rtl,
    layout: "/rtl",
  },

];
export default routes;
