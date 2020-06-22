import { createSlice } from '@reduxjs/toolkit'

const namespace = 'class'

export const initialState = {
  isLoading: false,
  listId: '',
  coachName: '',
  students: [],
}

const classSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    fetchStudentlistAsync: (state, action) => {
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
      state.isLoading = initialState.isLoading
      state.listId = initialState.listId
      state.coachName = initialState.coachName
      state.students = initialState.students
    },
  },
})

export const {
  fetchStudentlistAsync,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} = classSlice.actions

export default classSlice.reducer
