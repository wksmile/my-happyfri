import {SAVE_ANSER, SAVE_SCORE, ADD_QUEST_INDEX, CHANGE_QUEORMAIN, CHANGE_CHOOSEID} from './mutation-types'

export default {
  [SAVE_ANSER] (state, answer) {
    state.myanswer.push(answer)
  },
  [SAVE_SCORE] (state, score) {
    state.score = score.score
  },
  [ADD_QUEST_INDEX] (state) {
    state.nowQuestIndex++
  },
  [CHANGE_QUEORMAIN] (state, bool) {
    state.queOrMain = bool
  },
  [CHANGE_CHOOSEID] (state, id) {
    state.chooseId = id
  }
}
