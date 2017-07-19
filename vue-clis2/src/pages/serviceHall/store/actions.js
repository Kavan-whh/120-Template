import axios from 'axios'
let qs = require('qs');

const actions = {
  // getAllData: async ({ commit,state }) => {
  //   let struct = {}
  //   let tag = {}
  //   await axios.get('/api/struct',{params:state.ids})
  //     .then(({ data }) => {
  //       struct = data.struct
  //     })
  //   await axios.post('/api/tag',qs.stringify({
  //       type: struct.type,
  //     }))
  //     .then(({ data }) => {
  //       tag = data.tag
  //     })
  //   commit('getData', {
  //     struct, tag
  //   })
  // },
}

export default actions
