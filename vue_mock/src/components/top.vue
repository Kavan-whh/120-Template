<template lang="html">
  <section>


  </section>

</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      popConfig,
      STATIC_PATH,
    }
  },
  mounted() {
    // console.log(popConfig);
        axios.get(popConfig.yunschool.groupApi, {
          params:{id:1}
        })
        .then(
            m=>console.log(m.data)
        );
    }
}
</script>

<style lang="scss">
</style>
