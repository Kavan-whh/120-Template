import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions.js'
// 注册vuex
Vue.use(Vuex)

// 初始化一些常用数据，根据vue的理念，使用到的数据都必须先进行初始化设置。
var state = {
  // 初始化数据
  initData: {//默认初始数据，等待被覆盖
    // ajax初始化数据
    auth: {
      yunschool: {},
      corp: {}
    },
    hasPermit: false,//true / false,
    yunGroup:{},
    corpGroup:{},


    // 用户传入数据
    html:  true, //true / false,
    rules: {
      roleid: [1, 2, 3], // 云校通讯录部门id
      uid: [], // 云校通讯录成员id
      corp_uid: [], // 企业号成员id
      corp_tag: [], // 企业号标签id
      corp_roleid: [], // 企业号组织架构id
    },
    contact: [], // [] 都显示， ['yunschool'] 只显示云校  ['corp'] 只显示企业号
    group: {//云校初始渲染数据
      yunschool: {
        role: [], // 上面一层
        user: [] // 下面一层
      },
      corp: {
        role: [], // 组织架构0 标签1 出现就显示，为空全显示
        user: [], // 只针对组织架构起作用
      }
    },
  },


  // 项目数据
  ctrl:'yunschool',
  yunUser:"department",//云校控制器下控制user显示哪一个
  corpUser:'department'//企业号控制器下控制user显示哪一个


}

// 导出一个新生成的Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
