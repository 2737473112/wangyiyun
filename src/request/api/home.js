//首页获取数据
import service from "..";
//获取轮播图数据
export function getBanner(){
    return service({
        method: "GET",
        url: '/banner?type=2',
    })
}

//发现获取好歌单
export function getMusicList(){
    return service({
        method: "GET",
        url: '/personalized?limit=10',
    })
}


