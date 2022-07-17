import {
  Button,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Form,
  Field,
  CellGroup,
  NavBar,
  Popup,
} from "vant";

//用数组来管理引入的Vant组件
let plugins = [
  Button,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Form,
  Field,
  CellGroup,
  NavBar,
  Popup,
];

export default function getVant(app) {
  plugins.forEach((element) => {
    return app.use(element);
  });
}
