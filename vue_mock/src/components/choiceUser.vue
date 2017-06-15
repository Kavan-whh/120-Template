<template lang="html">
  <section class="wrap clear">
    <dl @click="tab(0)" class="department" :class="{active:curr==='department'}">
      <dt >部门</dt>
      <dd v-show="curr==='department'" >
        <my-department  cls="" :lists="child1" level="1" isInput="true"></my-department>
      </dd>
    </dl>
    <dl @click="tab(1)"  class="member " :class="{active:curr==='member'}">
      <dt>成员</dt>
      <dd v-show="curr==='member'" class="clear">
        <my-department v-on:ckdepart=""  cls="role__member" :lists="child2" level="1" isInput="false"></my-department>
        <section class="role__users">
          循环组件
        </section>
      </dd>
    </dl>

  </section>
</template>

<script>
import {mapState,mapMutation} from 'vuex'
import myDepartment from '@/components/department'


export default {
  props:['child1', 'child2'],
  data(){
    return{
      curr:'department'

    }
  },
  computed:{
    /*memberChild(){
      if(typeof this.child!='undefined'){
        let temp=new Array();
        // temp=this.child.concat();
        // console.log(this.child);
        temp = JSON.parse(JSON.stringify(this.child));
        console.log(temp);
        return temp
      }
    }*/
  },
  components:{
      myDepartment,
  },
  methods:{
    tab(type){
      if(type===0){
        this.curr='department'
      }else {
        this.curr='member'
      }

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/choiceUser.scss"

</style>
