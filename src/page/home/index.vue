<template>
  <div>
    <common componentPage="home"></common>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import common from '../../components/common'

  export default {
    data () {
      return {
        queOrMain: false
      }
    },
    computed: {
      ...mapState([
        'levels'
      ])
    },
    components: {
      common
    }
  }
</script>

<style scoped>
  .home {
    background-image: url("../../assets/images/1-1.jpg");
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .upPage {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .upPage img {
    position: absolute;
    width: 20%;
    right: 10%;
  }
  .upPage .week {
    position: absolute;
    width: 18%;
    right: 10%;
    top: 300px;
    font-weight: 600;
    font-size: 30px;
    color: #a87c55;
  }
  .btstart {
    position: absolute;
    top: 60%;
    width: 100%;
  }
  .btstart img {
    width: 25%;
  }
  .flowPage {
    position: absolute;
    top: 20%;
    width: 100%;
  }
  .flowPage img {
    width: 80%;
  }
</style>
