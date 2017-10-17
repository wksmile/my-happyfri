import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
// import actions from './action'

Vue.use(Vuex)

const state = {
  levels: '第一周',
  nowQuestIndex: -1,    //  当前问题的id
  chooseId: null,       //   当前选择答案的id
  score: 0,
  queOrMain: false,     //  当前页面是主页面还是问题页面 false表示主页面 true表示问题的页面
  myanswer: [],         //   答案
  question: [
    {
      description: '题目一',
      quest: [
        {
          chooseChar: 'A',
          chooseDetail: '正确答案',
          chooseNum: 1
        },
        {
          chooseChar: 'B',
          chooseDetail: '答案B',
          chooseNum: 2
        },
        {
          chooseChar: 'C',
          chooseDetail: '答案C',
          chooseNum: 3
        },
        {
          chooseChar: 'D',
          chooseDetail: '答案D',
          chooseNum: 4
        }
      ]
    }, {
      description: '题目二',
      quest: [
        {
          chooseChar: 'A',
          chooseDetail: '答案A',
          chooseNum: 1
        },
        {
          chooseChar: 'B',
          chooseDetail: '正确答案',
          chooseNum: 2
        },
        {
          chooseChar: 'C',
          chooseDetail: '答案C',
          chooseNum: 3
        },
        {
          chooseChar: 'D',
          chooseDetail: '答案D',
          chooseNum: 4
        }
      ]
    }, {
      description: '题目三',
      quest: [
        {
          chooseChar: 'A',
          chooseDetail: '答案A',
          chooseNum: 1
        },
        {
          chooseChar: 'B',
          chooseDetail: '答案B',
          chooseNum: 2
        },
        {
          chooseChar: 'C',
          chooseDetail: '正确答案',
          chooseNum: 3
        },
        {
          chooseChar: 'D',
          chooseDetail: '答案D',
          chooseNum: 4
        }
      ]
    }, {
      description: '题目四',
      quest: [
        {
          chooseChar: 'A',
          chooseDetail: '答案A',
          chooseNum: 1
        },
        {
          chooseChar: 'B',
          chooseDetail: '答案B',
          chooseNum: 2
        },
        {
          chooseChar: 'C',
          chooseDetail: '答案C',
          chooseNum: 3
        },
        {
          chooseChar: 'D',
          chooseDetail: '正确答案',
          chooseNum: 4
        }
      ]
    }, {
      description: '题目五',
      quest: [
        {
          chooseChar: 'A',
          chooseDetail: '正确答案',
          chooseNum: 1
        },
        {
          chooseChar: 'B',
          chooseDetail: '答案B',
          chooseNum: 2
        },
        {
          chooseChar: 'C',
          chooseDetail: '答案C',
          chooseNum: 3
        },
        {
          chooseChar: 'D',
          chooseDetail: '答案D',
          chooseNum: 4
        }
      ]
    }],
  answer: [1, 2, 3, 4, 1]
}

export default new Vuex.Store({
  state,
  mutations
})
