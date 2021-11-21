// import { useRoutes } from "react-router-dom";
// import { Provider } from "react-redux";

// import "./App.css";

// import routes from "./routes";
// import Layout from "./components/Layout/index";
// import store from "./store";
// function App() {
//   return (
//     <Provider store={store}>
//       <Layout />
//       {useRoutes(routes)}
//     </Provider>
//   );
// }

// export default App;


/** 为什么用js对象的形式会有报错呢？导航正常显示，页面切换不行 */

import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./application/Home";
import Sing from "./application/Sing";
import RankList from "./application/RankList";

import store from "./store";

import "./App.css";
import "./components/Tabs/index.less"
const menus = [
  { id: "home", name: "推荐", path: "/", element: <Home /> },
  { id: "sing", name: "歌手", path: "/sing", element: <Sing /> },
  { id: "ranklist", name: "排行榜", path: "/ranklist", element: <RankList /> },
];

function App() {
  return (
    <Provider store={store}>
      <ul className='tab'>
        {menus.map(m => <li key={m.id}><Link to={m.path}>{m.name}</Link></li>)}
      </ul>
      <Routes>
        {menus.map(m => <Route key={m.id} path={m.path} element={m.element}></Route>)}
      </Routes>
    </Provider>
  );
}


export default App;