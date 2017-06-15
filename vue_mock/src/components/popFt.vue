<template lang="html">
  <section :style="style">
    <div class="inner clear">
      <a href="javascript:void(0);"  class="left">取消</a>
      <a href="javascript:void(0);" class="right">确认</a>
    </div>

  </section>
</template>

<script>
export default {
  props: ['width', 'height', 'cancelMethod', 'saveMethod'],
  computed: {
    style() {
      return {
        width: this.width ? this.width : '300px',
        height: this.height ? this.height : '44px',

      }
    },

  },

}
</script>

<style lang="scss" scoped>
.inner {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding: 2.5% 0;
    a {
        display: block;
        width: 25%;
        height: 95%;
        line-height: 2;
        text-align: center;
        &:nth-child(1) {
            background: #ddd;
            color: #000;
        }
        &:nth-child(2) {
            background: #00c79c;
            color: #fff;
        }
    }
}
</style>
