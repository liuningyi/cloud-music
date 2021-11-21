import React from "react";

import Layout from "../components/Layout";

import Home from "../application/Home";
import Sing from "../application/Sing";
import RankList from "../application/RankList";
import { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: Layout,
    children: [
      { index: true, element: Home },
      { path: "/sing", element: Sing },
      { path: "/ranklink", element: RankList }
    ]
  }
];

export default routes;
