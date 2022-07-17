import { Button, Swipe, SwipeItem } from 'vant';
//用数组来管理引入的Vant组件
let plugins = [
    Button, Swipe, SwipeItem
]
export default function getVant(app) {
    plugins.forEach(element => {
        return app.use(element)
    });
}
