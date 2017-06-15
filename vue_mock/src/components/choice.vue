<template lang="html">
  <section>
    <div class="tap">
      <!--  云校选人组件-->
      <div class="sec__yun" v-if="ctrl==='yunschool'">
        <p>yunschool</p>
        <choice-role ctrlRole="yunschool"></choice-role>
        <choice-user v-show="yunUser==='department'" :child1="yunUserDpart"  :child2="yunUserDpart"></choice-user>
        <choice-user v-show="yunUser==='tag'" :child1="yunUserTag" :child2="yunUserTag"></choice-user>
      </div>

      <!-- 企业号选人组件 -->
      <div class="sec__corp" v-if="ctrl==='corp'">
        <p>corp</p>
        <choice-role ctrlRole="corp"></choice-role>
        <!-- <choice-user v-show="corpUser==='department'"></choice-user> -->
        <!-- <choice-tag v-show="corpUser==='tag'"></choice-tag> -->
      </div>

    </div>
  </section>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
import choiceRole from '@/components/choiceRole'
import choiceUser from '@/components/choiceUser'
import choiceTag from '@/components/choiceTag'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['ctrl', 'yunUser', 'corpUser']),
    ...mapState({
      yunGroup: state => state.initData.yunGroup,
    }),
    yunUserDpart() {
      if (typeof this.yunGroup.department != 'undefined') {
        return this.yunGroup.department.role
      }
    },
    yunUserTag() {
      if (typeof this.yunGroup.tags != 'undefined') {
        return this.yunGroup.tags.role
      }
    },
  },
  components: {
    choiceRole,
    choiceUser,
    choiceTag
  }

}
</script>

<style lang="scss" scoped>
section {
  padding: 1.5%;
  box-sizing: content-box;
    background-color: #f5f5fe;
}</style>
