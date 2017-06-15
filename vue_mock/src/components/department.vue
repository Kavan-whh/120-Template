<template lang="html">
    <ul :class="cls">
      <section v-for="item in lists"  key="item.id">
        <li >
          <div class=""  :style="{paddingLeft: 10 * level + 'px'}">
            <i class="jstree-icon"  :class="iconCls[expand[item.id]]"  @click.stop="chageClass(item)"></i>
             <!-- 文件夹图标 -->
             <span class="mod-icon" :class="modIcon[expand[item.id]]"></span>
             <!-- 部门名称 -->
             <span class="departName"  :class="isLight[expand[item.id]]">{{item.name}}</span>

          </div>
          <div v-if="isInput=='true'" class="input" >
          </div>

        </li>
         <my-department v-on:ckdepart="bubble" :isInput="isInput" v-show="expand[item.id] == 2"    v-if="item.children" :lists="item.children" :level="parseInt(level)+1"></my-department>
      </section>

    </ul>


</template>

<script>
export default {
  name: 'my-department',
  props: ['cls', 'lists', 'level','isInput'],
  data() {
    return {
      iconCls: ['jstree-no', 'jstree-icon-sq', ''], //
      modIcon:['mod-icon-file','mod-icon-file',''],
      isLight:['normal','normal','']

    };
  },
  computed: {
    expand: function() {
      let temp = {};
      if (typeof this.lists !== 'undefined') {
        this.lists.forEach(item => {
          if (item.expand) {
            temp[item.id] = item.expand;
          } else {
            temp[item.id] = item.children
              ? (item.id == 1 ? 2 : 1)
              : 0;
          }

        })
      }
      return temp
    }
  },
  methods: {
    // 冒泡事件到vm
    bubble(id) {
      this.$emit('ckdepart', id);
    },
    chageClass(item) {
      for (var i in this.lists) {
        if (this.lists[i].id == item.id) {
          this.$set(this.lists[i], 'expand', 3 - this.expand[item.id]);
        }
      }

    },

  },


}
</script>

<style lang="scss" scoped>@import "../assets/css/deparment.scss";</style>
