
import { Button, Swipe, SwipeItem, Tab, Tabs, Form, Field, CellGroup, NavBar, CountDown, Toast } from 'vant';
//用数组来管理引入的Vant组件
let plugins = [
    Button, Swipe, SwipeItem, Tab, Tabs, Form, Field, CellGroup, NavBar, CountDown, Toast
]
export default function getVant(app) {
    plugins.forEach(element => {
        return app.use(element)
    });
}
