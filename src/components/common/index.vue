<template>
  <div>
    <div class="home">
      <div class="upPage">
        <img src="../../assets/images/WechatIMG2.png">
        <span class="week">{{levelsOrMain}}</span>
      </div>
      <div class="btstart" @click="routerPath">
          <img :src="btnImg">
      </div>
      <div class="flowPage">
        <img :src="flowImg">
        <slot name="question" :quer="this.nowQuest"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import img12 from '../../assets/images/1-2.png'
  import img21 from '../../assets/images/2-1.png'
  import img14 from '../../assets/images/1-4.png'
  import img22 from '../../assets/images/2-2.png'
  import img31 from '../../assets/images/3-1.png'

  export default {
    data () {
      return {
        questLen: 0,          //   总共的问题数量
        //  queOrMain: false,  当前页面是主页面还是问题页面 false表示主页面 true表示问题的页面
        nowanswer: null       //  当前题目的答案
      }
    },
    created () {
      this.initData()
    },
    computed: {
      ...mapState([
        'levels', 'question', 'nowQuestIndex', 'myanswer', 'queOrMain', 'chooseId'
      ]),
      flowImg () {     // 中部的图片
        return this.queOrMain ? img21 : img12
      },
      btnImg () {     // 按钮图片
        return (this.nowQuestIndex === this.questLen) ? img31 : this.queOrMain ? img22 : img14
      },
      nowQuest () {    //  当前问题页面
        if (this.nowQuestIndex > -1) {
          return this.question[this.nowQuestIndex]
        }
      },
      levelsOrMain () {
        return this.queOrMain ? this.question[this.nowQuestIndex]['description'] : this.levels
      }
    },
    methods: {
      ...mapMutations([
        'ADD_QUEST_INDEX', 'CHANGE_QUEORMAIN', 'SAVE_ANSER', 'CHANGE_CHOOSEID'
      ]),
      initData () {
        this.questLen = this.question.length
      },
      routerPath () {
        if (!this.chooseId) {
          this.SAVE_ANSER(this.nowanswer)
          this.CHANGE_CHOOSEID(null)
          this.nowanswer = null
        } else {
          alert('你还没有选择答案')
        }
        let nextQuestId = this.nowQuestIndex + 1
        if (this.questLen > nextQuestId) {
          this.ADD_QUEST_INDEX()
          this.$router.push({path: '/question', query: {id: nextQuestId}})
        } else {
          this.$router.push({path: '/complete'})
        }
      }
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
