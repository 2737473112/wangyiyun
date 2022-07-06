<template>
    <div class="iconList">
        <div class="iconItem">
            <div class="icon"> 
                <i class="fa fa-camera-retro fa-lg"></i>
                <span>每日推荐</span>
            </div>
        </div>

        <div class="iconItem">
            <div class="icon"> 
                <i class="fa fa-camera-retro fa-lg"></i>
                <span>私人FM</span>
            </div>
        </div>

        <div class="iconItem">
            <div class="icon"> 
                <i class="fa fa-camera-retro fa-lg"></i>
                <span>歌单</span>
            </div>
        </div>

        <div class="iconItem">
            <div class="icon"> 
                <i class="fa fa-camera-retro fa-lg"></i>
                <span>排行榜</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .iconList{
        width:100%;
        height: 2rem;
       
        display: flex;
        justify-content: space-around;
        align-items: center;
        .iconItem{
            width:25%;
            height: 100%;
            display: flex;
            flex-direction:column;
            align-items: center;
            .icon{
                width:1rem;
                height:1rem;
            }
        }
    }
</style>