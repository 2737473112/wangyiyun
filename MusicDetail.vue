<template>
   <img :src="musicList.al.picUrl" alt="" class="bgimg" /> 
   <div class="detailTop" >    
        <div class="detailTopLeft">
            <svg class="icon bofanganniu" aria-hidden="true" @click="backHome">
                <use xlink:href="#icon-zuojiantou" @click="updatedetailShow"></use>
            </svg>
            <div class="leftMarquee">
                <Vue3Marquee style="color:white">
                    {{musicList.name}}
                    
                </Vue3Marquee>
                
                <span v-for="(item) in musicList.ar" :key="item">
                    {{item.name}}
                </span>                
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-youjiantou1"></use>
                </svg>
            </div>
        </div>
        
        <div class="detailTopRight">
            <svg class="icon bofanganniu" aria-hidden="true" >
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
   </div>
   
   <div class="detailContent" v-show="!isLyricShow"  >
        <img src="@/assets/needle-ip6.png" alt="" class="img_needle" :class="{img_needle_active:!isbtnShow}">
        <img src="@/assets/cd.png" alt="" class="img_cd">
        <img :src="musicList.al.picUrl" alt="" class="img_ar"  @click="isLyricShow=true" :class="{img_ar_active:!isbtnShow,img_ar_paused:isbtnShow}">


   </div>

   <div class="musicLyric" ref="musicLyric" v-show="isLyricShow" @click="isLyricShow=false">
        <p v-for="item in lyric" :key="item" :class="{active:(currentTime*1000>=item.time&&currentTime*1000<item.pre)}">
        {{item.lrc}}
        </p>
   </div>

   <div class="detailFooter">
        <div class="footerTop">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-aixin" ></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-iconfontzhizuobiaozhun023146" ></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-yinlechangpian" ></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao-"></use>
            </svg>

        </div>

        <div class="footerContent">
        </div>

        <div class="footer">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-xunhuan" ></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-shangyishoushangyige" @click="goPlay(-1)"></use>
            </svg>
            <svg class="iconPlay" aria-hidden="true" v-if="isbtnShow" @click="play" >
                <use xlink:href="#icon-bofang1" ></use>
            </svg>
            <svg class="iconPlay" aria-hidden="true" v-else @click="play">
                <use xlink:href="#icon-zanting" ></use>
            </svg>

            <svg class="icon" aria-hidden="true"  @click="goPlay(1)">
                <use xlink:href="#icon-xiayigexiayishou" ></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-zu" ></use>
            </svg>
        </div>

   </div>
</template>

<script>

    import { Vue3Marquee } from 'vue3-marquee'
    import 'vue3-marquee/dist/style.css'
    import { mapMutations ,mapState} from 'vuex';

    export default{
        data(){
            return{
                isLyricShow:false
            }        
        },
        methods:{
            backHome:function(){
                this.isLyricShow=false
                this.updatedetailShow()
            },
            goPlay:function(num){
                let index = this.playListIndex+num;
                if(index<0){
                    index=this.playList.length-1;
                }else if(index==this.playList.length){
                    index=0;
                }
                this.updatePlayListIndex(index);


            },
            ...mapMutations(['updatedetailShow','updatePlayListIndex'])
         },
        computed:{
            ...mapState(["lyricList","currentTime","playListIndex","playList"]),
            lyric:function(){
                let arr;
                if(this.lyricList.lyric){
                    arr=this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
                        let min=item.slice(1,3);
                        let sec=item.slice(4,6);
                        let mill=item.slice(7,10);
                        let lrc=item.slice(11,item.length);
                        let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);
                        if(isNaN(Number(mill))){
                            mill=item.slice(7,9);
                            lrc=item.slice(10,item.length);
                            time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);
                        }

                        return {min,sec,mill,lrc,time}
                    })

                    arr.forEach((item,i) => {
                        if(i==arr.length-1){
                            item.pre=0
                        }else{
                            item.pre=arr[i+1].time

                        }
                    });
                }
                //console.log(arr)
                return arr;
            }
        },

        mounted(){
            
             console.log(this.musicList);
            //console.log(this.lyricList.lyric)
        },
        watch:{
            currentTime:function(){
                let p = document.querySelector("p.active")
                console.log([p]);
                if(p.offsetTop>250){
                    this.$refs.musicLyric.scrollTop=p.offsetTop-250   
                }
            }
        },
        components: {
            Vue3Marquee,
         },
         
        props:['musicList','isbtnShow','play']
    }
</script>

<style lang="less" scoped>
    .bgimg{
        width: 100%;
        height: 100%;
        z-index: -1;
        position:absolute;
        right: 1px;//默认偏了一半非得调一下才刷新
        filter: blur(50px);
    }
    .detailTop{
        width: 100%;
        height: 1rem;
        display: flex;
        padding: 0.2rem;
        justify-content: space-between;
        align-items: center;
        fill: #fff;
        .detailTopLeft{
            display: flex;
            align-items: center;
            .leftMarquee{
                width: 3rem;
                height: 100%; 
                
                .icon{
                    width: 0.3rem;
                    height: 0.3rem;
                    fill: white;
                    
                }
                span{
                    color:white;
                }
            }
              
        }
        
    }

    .detailContent{
        width: 100%;
        height: 9rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .img_needle{
            width: 2rem;
            height: 3rem;
            position: absolute;
            left: 45%;
            transform-origin: 0 0;
            transform: rotate(-15deg);
            transition: all 2s;
        }
        .img_needle_active{
            width: 2rem;
            height: 3rem;
            position: absolute;
            left: 45%;
            transform-origin: 0 0;
            transform: rotate(0deg);
            transition: all 2s;
        }
        .img_cd{
            width: 5rem;
            height: 5rem;
            position: absolute;
            bottom: 2.3rem;
            z-index: -1;
        }
        .img_ar{
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
            position: absolute;
            bottom: 3.14rem;
            animation: rotate_ar 10s linear infinite;
           
        }
        .img_ar_active{
            animation-play-state: running;
        }
        .img_ar_paused{
            animation-play-state: paused;
        }
        @keyframes rotate_ar {
            0%{
                transform: rotateZ(0deg);
            }
            100%{
                transform: rotateZ(360deg);
            }
        
        }
        
    }

    .detailFooter{
        width: 100%;
        height: 3rem;
        position: absolute;
        bottom: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .footerTop{
            width: 100%;
            height: 1rem;
            display:flex;
            justify-content: space-around;
            align-items: center;
            .icon{
                width: 0.5rem;
                height: 0.5rem;
                fill: rgb(245,234,234);
            }

        }
        .footer{
            width: 100%;
            height: 1rem;
            display:flex;
            justify-content: space-around;
            align-items: center;
            .icon{
                fill: rgb(245,234,234);
                width: 0.5rem;
                height: 0.5rem;
            }
            .iconPlay{
                width: 0.7rem;
                height: 0.7rem;
                fill: rgb(245,234,234);
              
            }

        }

    }

    .musicLyric{
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: column;
        margin-top: 0.2rem;
        overflow: scroll;
        p{
            margin-bottom: 20px;
            
        }
        .active{
            color:white;
            font-size: 20px;
        }
    }
    
</style>