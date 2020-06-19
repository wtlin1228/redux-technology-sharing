import { all } from 'redux-saga/effects'

import { classSaga } from 'core/Class'

export default function* rootSaga() {
  yield all([classSaga()])
}
