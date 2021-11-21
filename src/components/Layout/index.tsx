import { Outlet } from "react-router-dom";

import "./index.less";
import Tabs from "../Tabs";
const menu = [
  { id: "home", path: "/", name: "推荐" },
  { id: "sing", path: "/sing", name: "歌手" },
  { id: "ranklist", path: "/ranklist", name: "排行榜" }
];

const Layout:React.FC<{}> = (props) => {
  return (
    <div className="layout">
      <Tabs menu={menu} />
      <Outlet />
    </div>
  );
};

export default Layout;
