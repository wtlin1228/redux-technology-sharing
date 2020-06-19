import { createSlice, createAction } from '@reduxjs/toolkit'

const namespace = 'class'

const initialState = {
  isLoading: false,
  listId: '',
  coachName: '',
  students: [],
}

const classSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    fetchStudentlist: (state, action) => {
      state.isLoading = true
    },

    fetchStudentlistSuccess: (state, action) => {
      const {
        listId = initialState.listId,
        coachName = initialState.coachName,
        students = initialState.students,
      } = action.payload

      state.isLoading = false
      state.listId = listId
      state.coachName = coachName
      state.students = students
    },

    fetchStudentlistFailure: (state, action) => {
      state = initialState
    },
  },
})

classSlice.asyncActions = {
  fetchStudentlistAsync: createAction(`${namespace}/fetchStudentlistAsync`),
}

export const {
  fetchStudentlist,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} = classSlice.actions

export const { fetchStudentlistAsync } = classSlice.asyncActions

export default classSlice.reducer
