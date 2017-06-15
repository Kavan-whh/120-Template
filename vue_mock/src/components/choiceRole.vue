<template lang="html">
  <section class="wrap">
    <div class="sec__yunschool" v-show="ctrlRole==='yunschool'">
      <div class="department__role" @click="yunTabRole(0)" v-if="showDepart" :class="{active:yunUser==='department'}">
        组织架构
      </div>
      <div class="tag__role" @click="yunTabRole(1)"  v-if="showTag" :class="{active:yunUser==='tag'}">
        标签
      </div>
    </div>


    <div class="sec__corp" v-show="ctrlRole==='corp'">
      <div class="department__role" @click="corpTagRole(0)" v-if="showDepart" :class="{active:corpUser==='department'}">
        组织架构
      </div>
      <div class="tag__role" @click="corpTagRole(1)"  v-if="showTag" :class="{active:corpUser==='tag'}">
        标签
      </div>
    </div>

  </section>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  props: ['ctrlRole'],
  created(){
    if(this.yunschoolRole.length===1){
      let temp;
      if(this.yunschoolRole[0]===1){
        temp='tag'
      }else {
        temp='department'
      }
      this.YUN_USER(temp)
    }
    if(this.corpRole.length===1){
      let temp;
      if(this.yunschoolRole[0]===1){
        temp='tag'
      }else {
        temp='department'
      }
      this.CORP_USER(this.corpRole[0])
    }
  },
  computed: {
    ...mapState(['yunUser', 'corpUser']),
    ...mapState({
      yunschoolRole: state => state.initData.group.yunschool.role,
      corpRole: state => state.initData.group.corp.role
    }),
    showDepart() {
      switch (this.ctrlRole) {
        case 'yunschool':
          return this.yunschoolRole.indexOf(0)!==-1 || this.yunschoolRole.length === 0
          break;
        case 'corp':
          return this.corpRole.indexOf(0)!==-1 || this.corpRole.length === 0
          break;
        default:

      }
    },
    showTag() {
      switch (this.ctrlRole) {
        case 'yunschool':
          return this.yunschoolRole.indexOf(1)!==-1 || this.yunschoolRole.length === 0
          break;
        case 'corp':
          return this.corpRole.indexOf(1)!==-1 || this.corpRole.length === 0
          break;
        default:

      }
    }
  },
  methods: {
    ...mapMutations(['YUN_USER', 'CORP_USER']),
    yunTabRole(type) {
      if (type === 0) {
        this.YUN_USER('department')
      } else {
        this.YUN_USER('tag')
      }
    },
    corpTagRole(type) {
      if (type === 0) {
        this.CORP_USER('department')
      } else {
        this.CORP_USER('tag')
      }
    }


  }

}
</script>

<style lang="scss" scoped>
$yunschool-color: #02C69E;
$corp-color: #2991E8;
@mixin active{
  color: white
}

@mixin innerTab {
  display: inline-block;
  padding: 1% 3.9%;
  cursor: pointer;
}

.sec__yunschool{
  .active{
    background-color: $yunschool-color;
    border: 1px solid $yunschool-color;
      @include active;
  }
}
.sec__corp{
  .active{
    background-color: $corp-color;
    border: 1px solid $corp-color;
    @include active;
  }
}

.wrap{
  .department__role{
    @include innerTab;
  }
  .tag__role{
    @include innerTab;
  }

}

</style>
