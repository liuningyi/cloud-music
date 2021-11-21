import { combineReducers } from "redux";

// 须有返回值的一个函数（感觉是某个属性值）
function getData(state = [123], action: any) {
  console.log(action.type);
  return state;
}

// combineReducers的参数是个对象，估计类似于Vuex中的那个顶层对象
// 合并汇总各reducer，拆分提高可读性利于维护
export default combineReducers({
  data: getData
});
