import { TestScheduler } from 'rxjs/testing'
import {
  fetchStudentlist,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from '../slice'
import fetchStudentlistRequestEpic from '../epics'

describe('fetch student list request epic', () => {
  let testScheduler

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toStrictEqual(expected)
    })
  })

  it('fetch student list successfully', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a-a', {
        a: fetchStudentlist({ listId: 1 }),
      })
      const state$ = null
      const dependencies = {
        getStudentsByListId: (listId) =>
          cold('--a', {
            a: {
              listId,
              coachName: '唐唐',
              students: [],
            },
          }),
      }

      const output$ = fetchStudentlistRequestEpic(action$, state$, dependencies)

      expectObservable(output$).toBe('-----a', {
        a: {
          type: fetchStudentlistSuccess.type,
          payload: {
            listId: 1,
            coachName: '唐唐',
            students: [],
          },
        },
      })
    })
  })

  it('fetch student list failed', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a-a', {
        a: fetchStudentlist({ listId: 1 }),
      })
      const state$ = null
      const dependencies = {
        getStudentsByListId: (listId) =>
          cold('--#', {
            a: {
              listId,
              coachName: '唐唐',
              students: [],
            },
          }),
      }

      const output$ = fetchStudentlistRequestEpic(action$, state$, dependencies)

      expectObservable(output$).toBe('-----a', {
        a: {
          type: fetchStudentlistFailure.type,
          payload: 'error',
        },
      })
    })
  })
})
