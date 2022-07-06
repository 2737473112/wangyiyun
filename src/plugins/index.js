//组件管理
import { Swipe,SwipeItem,Button,Popup  } from 'vant';
//把组件放在数组中
let plugins = [
    Swipe,SwipeItem,Button,Popup  
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}