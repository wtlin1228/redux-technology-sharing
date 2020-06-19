import { combineReducers } from 'redux'
import {
  CLASS_FETCH_STUDENTLIST_ASYNC,
  CLASS_FETCH_STUDENTLIST_SUCCESS,
  CLASS_FETCH_STUDENTLIST_FAILURE,
} from './action'

const initStudentlist = {
  isLoading: false,
  listId: '',
  coachName: '',
  students: [],
}

const studentlist = (state = initStudentlist, action) => {
  switch (action.type) {
    case CLASS_FETCH_STUDENTLIST_ASYNC:
      return {
        ...state,
        isLoading: true,
      }

    case CLASS_FETCH_STUDENTLIST_SUCCESS:
      const {
        listId = initStudentlist.listId,
        coachName = initStudentlist.coachName,
        students = initStudentlist.students,
      } = action.payload
      return {
        isLoading: false,
        listId,
        coachName,
        students,
      }

    case CLASS_FETCH_STUDENTLIST_FAILURE:
      return initStudentlist

    default:
      return state
  }
}

export default combineReducers({
  studentlist,
})
