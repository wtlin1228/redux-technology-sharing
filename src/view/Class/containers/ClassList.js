import React, { useEffect } from 'react'
import { Observable } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'
import { useEventCallback } from 'rxjs-hooks'

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
  const [classState, classDispatcher] = useClassContext()

  const { isLoading, students } = classState
  const studentsCount = students.length

  const [handleTabClick] = useEventCallback((listId$) =>
    listId$.pipe(
      map((listId) => {
        classDispatcher(fetchStudentlistAsync(listId))
        return listId
      }),
      switchMap((listId) =>
        getStudentsByListIdObservable(listId).pipe(
          map((response) => classDispatcher(fetchStudentlistSuccess(response))),
          catchError((error) => classDispatcher(fetchStudentlistFailure(error)))
        )
      )
    )
  )

  useEffect(() => {
    handleTabClick(0)
  }, [handleTabClick])

  return (
    <>
      <h1 style={{ position: 'fixed', top: 0, left: 24 }}>
        學生數：{studentsCount}
      </h1>
      <ClassList
        onTabClick={handleTabClick}
        students={students}
        isLoading={isLoading}
      />
    </>
  )
}

export default ClassListContainer

const getStudentsByListIdObservable = (listId) =>
  Observable.create((observer) => {
    getStudentsByListId(listId)
      .then((response) => {
        observer.next(response)
        observer.complete()
      })
      .catch(() => observer.error())
  })
