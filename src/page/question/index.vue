<template>
  <div>
    <common componentPage="quest">
        <template slot="question" scope="props">
          <div v-if="props.quer" class="questItem">
            <div><p>{{props.quer.description}}</p></div>
            <ul>
              <li v-for="item in props.quer.quest" @click="chooseAnser(item.chooseNum)">
                <span class="circle"></span>
                <span class="char">{{item.chooseChar}}</span>
                <span>{{item.chooseDetail}}</span>
              </li>
            </ul>
          </div>
        </template>
    </common>
  </div>
</template>

<script>
  import common from '../../components/common'
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        nowQuestIndex: 0,    // 当前题目编号
        questTitle: null,    //  题目描述
        questDetail: null,   //  题目具体内容  []
        questLen: 0,         //  题目总数量
        nowNode: '',         //  当前问题节点
        chooseId: null       //  选择了答案的id
      }
    },
    created () {
      this.initData()
    },
    computed: {
      ...mapState([
        'question', 'answer', 'chooseId'
      ])
    },
    methods: {
      ...mapMutations([
        'CHANGE_CHOOSEID'
      ]),
      initData () {
        this.questLen = this.question.length
        if (this.$route.query.id > this.questLen) {
          this.nowQuestIndex = this.$route.query.id
          this.questTitle = this.question[this.nowQuestIndex]['description']
          this.questDetail = this.question[this.nowQuestIndex]['quest']
        }
      },
      chooseAnser (key) {
        this.CHANGE_CHOOSEID(key)
        this.answer.push(key)
        if (this.nowNode) {
          this.nowNode.firstElementChild.style.backgroundColor = ''
          this.nowNode.querySelector('.char').style.color = 'white'
        }
        this.nowNode = event.target.parentNode
        this.nowNode.firstElementChild.style.backgroundColor = 'yellow'
        this.nowNode.querySelector('.char').style.color = 'black'
      }
    },
    components: {
      common
    }
  }
</script>

<style scoped>
  .questItem {
    position: absolute;
    top: 20%;
    width: 400px;
    left: 50%;
    margin-left: -200px;
    font-size: 40px;
    color: white;
    text-align: left;
  }

  .questItem ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .questItem li {
    margin: 15px 0;
    display: flex;
    align-items: center;
  }

  .questItem li span:nth-child(2) {
    position: relative;
    right: 40px;
  }

  .char {
    z-index: 10;
  }

  .circle {
    display: inline-block;
    width: 44px;
    height: 44px;
    border-radius: 22px;
    border: 2px solid white;
  }
</style>
