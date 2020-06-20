import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// utils
import { studentsCountSelector } from 'core/Class'

// assets

// actions
import { fetchStudentlistAsync } from 'core/Class'

// components
import ClassList from '../components/ClassList'

// self-defined-components

const ClassListContainer = () => {
  const dispatch = useDispatch()

  const [selectedListId, setSelectedListId] = useState('0')

  const isLoading = useSelector((state) => state.class.isLoading)
  const students = useSelector((state) => state.class.students)

  const studentsCount = useSelector(studentsCountSelector)

  const handleClassChange = useCallback(
    (listId) => dispatch(fetchStudentlistAsync({ listId })),
    [dispatch]
  )

  useEffect(() => {
    handleClassChange(selectedListId)
  }, [selectedListId, handleClassChange])

  return (
    <>
      <h1 style={{ position: 'fixed', top: 0, left: 24 }}>
        學生數：{studentsCount}
      </h1>
      <ClassList
        onTabClick={setSelectedListId}
        students={students}
        isLoading={isLoading}
      />
    </>
  )
}

export default ClassListContainer
