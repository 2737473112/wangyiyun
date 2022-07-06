<template>
  <div class="topNav">
        <svg class="icon bofanganniu" aria-hidden="true" >
                <use xlink:href="#icon-31liebiao" ></use>
        </svg>
    
    <div class="topContent">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
        
    <svg class="icon bofanganniu" aria-hidden="true" >
        <use xlink:href="#icon-sousuo" ></use>
    </svg>
  </div>
</template>



<style lang="less" scoped>
    .topNav{
        
            .topContent{
                width: 60%;
                display: flex;
                height: 100%;
                justify-content: space-around;
            }
        width:100%;
        height: 1rem;
        padding:10px;
        display: flex;
        justify-content: space-between;
        
        font-size: 18px;
    }
    .active{
        font-weight: 900;
    }
</style>