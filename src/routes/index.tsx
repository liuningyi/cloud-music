import type { RouteObject } from "react-router-dom";
import Home from "../application/Home";
import Sing from "../application/Sing";

const routes: RouteObject[] = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path: "/sing",
        element: <Sing />
    }
]

export default routes