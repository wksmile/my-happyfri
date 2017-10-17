<template>
  <div class="main">
    <div class="score">
      <img src="../../assets/images/4-2.png">
      <p class="scoreNum">{{score}}分!</p>
      <p>你说，是不是把知识都还给小学老师了？</p>
    </div>
    <div class="share" @click="changeWrapper">
      <img src="../../assets/images/4-3.png">
    </div>
    <div class="QRcode">
      <p>关注葡萄之家，获取答案。</p>
      <img src="../../assets/images/4-4.png">
    </div>
    <div class="wrapper" v-if="isWrapper" @click="changeWrapper">
      <img src="../../assets/images/5-2.png">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        isWrapper: false
      }
    },
    computed: {
      ...mapState([
        'score'
      ])
    },
    methods: {
      changeWrapper () {
        this.isWrapper = !this.isWrapper
      }
    }
  }
</script>

<style scoped>
  .main {
    background-image: url("../../assets/images/4-1.jpg");
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .score {
    position: absolute;
    top: 5%;
    width: 100%;
    text-align: center;
    font-size: 40px;
  }
  .score .scoreNum {
    margin: 20px auto;
    color: firebrick;
    font-size: 6rem;
    font-weight: 600;
  }
  .score p {
    position: relative;
    width: 50%;
    margin: 0 auto;
    bottom: 300px;
    color: dimgrey;
  }
  .score img {
    width: 60%;
  }
  .share {
    position: absolute;
    top: 40%;
    width: 100%;
    text-align: center;
  }
  .share img {
    width: 35%;
  }
  .QRcode {
    position: absolute;
    top: 60%;
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: brown;
  }
  .QRcode img {
    width: 35%;
  }
  .wrapper {
    width: 100%;
    background: url("../../assets/images/5-1.png");
    background-size: cover;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .wrapper img {
    width: 70%;
  }
</style>
