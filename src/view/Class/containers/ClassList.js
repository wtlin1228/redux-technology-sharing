import React, { useState, useEffect } from 'react'

// utils
import { getStudentsByListId } from 'core/Class'
import { useClassContext } from 'context/Class'

// assets

// actions
import {
  fetchStudentlistAsync,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from 'context/Class'

// components
import ClassList from '../components/ClassList'

// self-defined-components

const ClassListContainer = () => {
  const [selectedListId, setSelectedListId] = useState('0')

  const [classState, classDispatcher] = useClassContext()

  useEffect(() => {
    classDispatcher(fetchStudentlistAsync({ listId: selectedListId }))
    getStudentsByListId(selectedListId)
      .then((response) => classDispatcher(fetchStudentlistSuccess(response)))
      .catch((error) => classDispatcher(fetchStudentlistFailure(error)))
  }, [selectedListId, classDispatcher])

  const { isLoading, students } = classState
  const studentsCount = students.length

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
