import { call, put, takeLatest } from 'redux-saga/effects'
import {
  fetchStudentlistAsync,
  fetchStudentlist,
  fetchStudentlistSuccess,
  fetchStudentlistFailure,
} from './slice'
import { getStudentsByListId } from './api'

function* fetchStudentlistWorker({ payload }) {
  try {
    yield put(fetchStudentlist())
    const rsp = yield call(getStudentsByListId, payload.listId)
    yield put(fetchStudentlistSuccess(rsp))
  } catch {
    yield put(fetchStudentlistFailure())
  }
}

export default function* classSaga() {
  yield takeLatest(fetchStudentlistAsync, fetchStudentlistWorker)
}
