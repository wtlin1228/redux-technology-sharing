import { combineEpics, ofType } from 'redux-observable'
import { of, Observable } from 'rxjs'
import { map, mapTo, switchMap, catchError } from 'rxjs/operators'
import {
  fetchStudentlistAsync,
  fetchStudentlist,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from './slice'
import { getStudentsByListId } from './api'

const fetchStudentlistStartEpic = (action$) =>
  action$.pipe(ofType(fetchStudentlistAsync.type), mapTo(fetchStudentlist()))

const fetchStudentlistRequestEpic = (action$) =>
  action$.pipe(
    ofType(fetchStudentlistAsync.type),
    switchMap((action) =>
      getStudentsByListIdObservable(action.payload.listId).pipe(
        map((response) => fetchStudentlistSuccess(response)),
        catchError((error) => of(fetchStudentlistFailure(error)))
      )
    )
  )

const getStudentsByListIdObservable = (listId) =>
  Observable.create((observer) => {
    getStudentsByListId(listId)
      .then((response) => {
        observer.next(response)
        observer.complete()
      })
      .catch(() => observer.error())
  })

export default combineEpics(
  fetchStudentlistStartEpic,
  fetchStudentlistRequestEpic
)
