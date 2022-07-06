import { createStore } from 'vuex'
import { getMusicLyric } from '../request/api/item';

export default createStore({
  state: {
    playList:[{//播放列表
      al:{
        id: 75365838,
        name: "心跳的证明",
        pic: 109951163828011410,
        picUrl: "https://p2.music.126.net/oNgEndb00SLlnWVqL22Z6A==/109951163828011414.jpg",
        pic_str: "109951163828011414"
      },
      id:1342798229,
      ar:[{
        name:"心跳的证明"
      }]
        
    }],
    playListIndex:0,//默认的下标为0
    isbtnShow:true,//暂停按钮的显示
    detailShow:false,//歌曲详情页显示
    lyricList:{},//歌词
    currentTime:0,//当前时间

  },
  mutations: {
    updateIsbtnShow:function(state,value){
        state.isbtnShow=value;
    },
    updatePlayList:function(state,value){
        state.playList=value;
      
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value;
    },
    updatedetailShow:function(state){
      state.detailShow=!state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function(state,value){
      console.log(state.currentTime)
      state.currentTime=value;
  },


  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusicLyric(value);
      console.log(res);
      context.commit("updateLyricList",res.data.lrc)
    }
  },
  modules: {
  }
})
