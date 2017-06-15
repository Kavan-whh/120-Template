<template>
<div id="app">
  <section class="pop">
    <pop-hd title="选择" width="100%"></pop-hd>
    <!-- 内容部分 -->
    <section class="pop__bd clear">
      <!-- Tab切换 -->
      <div class="left pop__tab">
        <div v-if="contact.length===0||contact.indexOf('yunschool')!==-1" class="yunschool" @click="tab(0)" :class="{'pop__tab-light':ctrl==='yunschool'}">
          云校通讯录
        </div>
        <div v-if="contact.length===0||contact.indexOf('corp')!==-1" class="corp" @click="tab(1)" :class="{'pop__tab-light':ctrl==='corp'}">
          企业号通讯录
        </div>
      </div>
      <div class="left pop__content">
        <!-- 输入框共用一个 -->
        <input-wrap></input-wrap>
        <my-choice style="height:70%"></my-choice>
      </div>

    </section>

    <pop-ft width="100%" height="10%"></pop-ft>

  </section>

</div>
</template>

<script>
import myTop from '@/components/top'
import popHd from '@/components/popHd'
import popFt from '@/components/popFt'
import inputWrap from '@/components/inputWrap.vue'
import myChoice from '@/components/choice'

import {
  mapState,
  mapMutations
} from 'vuex'

var cancel;
createPop(function(data) {
  cancel = data.methods.cancel;
});

export default {
  name: 'app',
  computed: {
    ...mapState(['ctrl','contact']),
    ...mapState({
      contact:state =>state.initData.contact
    })
  },
  methods: {
    ...mapMutations(['M_CTRL']),
    cancel: cancel,
    tab(type){
      if(type===1){
        this.M_CTRL('corp')
      }else {
        this.M_CTRL('yunschool')
      }
    }
  },
  components: {
    popHd,
    popFt,
    inputWrap,
    myChoice
  },


}
</script>

<style lang="scss" scoped>@import "./assets/css/app.scss";</style>
