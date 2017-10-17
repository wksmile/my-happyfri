import {SAVE_ANSER, SAVE_SCORE, ADD_QUEST_INDEX} from './mutation-types'

export default {
  [SAVE_ANSER] (state, answer) {
    state.answer = answer.answer
  },
  [SAVE_SCORE] (state, score) {
    state.score = score.score
  },
  [ADD_QUEST_INDEX] (state) {
    state.nowQuestIndex++
  }
}
