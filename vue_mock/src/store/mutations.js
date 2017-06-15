// vuex中state的数据只能被mutations方法所更改
const GET_DATA='GET_DATA'
const M_CTRL='M_CTRL'
const YUN_USER='YUN_USER'
const CORP_USER='CORP_USER'


const mutations = {
  [GET_DATA](state,obj){//初始化数据
    ['auth','hasPermit','yunGroup','corpGroup'].forEach((item)=>{
      state.initData[item]=obj[item]
    })
  },
  [M_CTRL](state,string){
    state.ctrl=string
  },
  [CORP_USER](state,string){
    state.corpUser=string
  },
  [YUN_USER](state,string){
    state.yunUser=string
    console.log(state.yunUser);
  }




}
export default mutations
