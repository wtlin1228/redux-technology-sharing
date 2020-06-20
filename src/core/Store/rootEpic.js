import { combineEpics } from 'redux-observable'
import { catchError } from 'rxjs/operators'
import { classEpic } from 'core/Class'

const epics = [classEpic]

const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

export default rootEpic
