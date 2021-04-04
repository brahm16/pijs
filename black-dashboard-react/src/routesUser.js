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
import DashboardUser from "views/User/DashboardUser";
import UserProfile from "views/UserProfile.js";

var routesUser = [
  {
    path: "/profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/subscriber",
  },
  {
    path: "/",
    name: "Orders",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-basket-simple",
    component: DashboardUser,
    layout: "/subscriber",
  },
  {
    path: "/products",
    name: "Products",
    rtlName: "الرموز",
    icon: "tim-icons icon-bag-16",
    component: Icons,
    layout: "/subscriber",
  },
  {
    path: "/events",
    name: "Our Events",
    rtlName: "خرائط",
    icon: "tim-icons icon-calendar-60",
    component: Map,
    layout: "/subscriber",
  },
  {
    path: "/guesthouse",
    name: "Guest House",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bank",
    component: Notifications,
    layout: "/subscriber",
  },


 
];
export default routesUser;
