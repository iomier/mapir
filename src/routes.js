import React from "react";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

const routes = [
  { path: "search", element: <PageThree />, label: "آدرس‌یاب" },
  { path: "routing", element: <PageTwo />, label: "نقشه" },
  { path: "/", element: <PageOne />, label: "خانه" },
];

export default routes;
