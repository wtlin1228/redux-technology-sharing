import {
  CLASS_FETCH_STUDENTLIST_ASYNC,
  CLASS_FETCH_STUDENTLIST_SUCCESS,
  CLASS_FETCH_STUDENTLIST_FAILURE,
} from './action'

export const classState = {
  isLoading: false,
  listId: '',
  coachName: '',
  students: [],
}

const classReducer = (state = classState, action) => {
  switch (action.type) {
    case CLASS_FETCH_STUDENTLIST_ASYNC:
      return {
        ...state,
        isLoading: true,
      }

    case CLASS_FETCH_STUDENTLIST_SUCCESS:
      const {
        listId = classState.listId,
        coachName = classState.coachName,
        students = classState.students,
      } = action.payload
      return {
        isLoading: false,
        listId,
        coachName,
        students,
      }

    case CLASS_FETCH_STUDENTLIST_FAILURE:
      return classState

    default:
      return state
  }
}

export default classReducer
