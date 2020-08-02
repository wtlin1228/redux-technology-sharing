import { combineEpics, ofType } from 'redux-observable'
import { of, from } from 'rxjs'
import { map, switchMap, catchError } from 'rxjs/operators'

import {
  fetchStudentlist,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from './slice'

const fetchStudentlistRequestEpic = (
  action$,
  state$,
  { getStudentsByListId }
) =>
  action$.pipe(
    ofType(fetchStudentlist.type),
    switchMap((action) =>
      from(getStudentsByListId(action.payload.listId)).pipe(
        map((response) => fetchStudentlistSuccess(response)),
        catchError((error) => of(fetchStudentlistFailure(error)))
      )
    )
  )

export default combineEpics(fetchStudentlistRequestEpic)
