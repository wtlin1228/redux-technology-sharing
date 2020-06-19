import { createSelector } from '@reduxjs/toolkit'

const studentsSelector = (state) => state.class.students

export const studentsCountSelector = createSelector(
  studentsSelector,
  (students) => students.length
)
