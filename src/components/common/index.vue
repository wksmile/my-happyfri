<template>
  <div>
    <div class="home">
      <div class="upPage">
        <img src="../../assets/images/WechatIMG2.png">
        <span class="week" v-if="componentPage == 'home'">{{levels}}</span>
        <span class="week" v-else-if="componentPage == 'quest'">{{levels}}</span>
      </div>
      <div v-if="componentPage == 'home'">
        <router-link :to="{path: '/quest', query: {id: 0}}">
          <div class="btstart">
            <img src="../../assets/images/1-4.png">
          </div>
        </router-link>
      </div>
      <div v-if="componentPage == 'quest'">
        <div class="btstart">
          <img src="../../assets/images/2-2.png">
        </div>
        <div class="flowPage">
          <img src="../../assets/images/2-1.png">
          <slot name="question" :quer="this.nowQuest"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
//  import img12 from '../../assets/images/1-2.png'
//  import img21 from '../../assets/images/2-1.png'
//  import img14 from '../../assets/images/1-4.png'
//  import img22 from '../../assets/images/2-2.png'
//  import img31 from '../../assets/images/3-1.png'

  export default {
    data () {
      return {
        questLen: 0,        //   总共的问题数量
        levelsOrMain: '',    //   上面下拉的部分
        queOrMain: false
      }
    },
    prop: ['componentPage'],   // 当前页面是主页面还是问题页面 false表示主页面 true表示问题的页面
    created () {
      this.initData()
    },
    computed: {
      ...mapState([
        'levels', 'question', 'nowQuestIndex', 'answer'
      ]),
//      btnImg () {     // 按钮图片
//        if (this.componentPage === 'home') {
//          return img14
//        } else if (this.componentPage === 'quest') {
//          return img22
//        } else if (this.componentPage === 'lastQuest') {
//          return img31
//        }
      nowQuest () {    //  当前问题页面
        if (this.nowQuestIndex > -1) {
          return this.question[this.nowQuestIndex]
        }
      }
    },
    methods: {
      ...mapMutations([
        'ADD_QUEST_INDEX'
      ]),
      initData () {
        this.questLen = this.question.length
      },
      routerPath () {
        // 根据路由判断是主页面还是问题的页面从而改变 queOrMain 的值
        let path = this.$route.path
        if (path === '/') {
          this.queOrMain = false
        } else {
          this.queOrMain = true
          if (this.answer[this.nowQuestIndex] === undefined) {
            alert('你还没有选择答案')
            return
          }
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
