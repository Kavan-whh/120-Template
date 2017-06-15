import axios from 'axios'
var actions = {
  getAllData: async({
    commit
  }, that) => {
    let auth = {}
    let yunGroup = {}
    let corpGroup = {}
    let hasPermit = ''
    await axios.get(popConfig.auth) //初始权限
      .then((data) => {
        // console.log(data.data.d.auth);
        auth = data.data.d.auth
        hasPermit = data.data.d.hasPermit
      })
    await axios.get(popConfig.yunschool.groupApi) //初始云校渲染型数据
      .then((data) => {
        // console.log(data.data.d);
        yunGroup = data.data.d
      })
    await axios.get(popConfig.corp.groupApi)
      .then((data) => {
        corpGroup = data.data.d
      })
    commit('GET_DATA', {
      auth,
      hasPermit,
      yunGroup,
      corpGroup
    }) //权限初始化


  }




}

export default actions
