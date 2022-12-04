import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import postSaga from './post';
import userSaga from './user';

axios.defaults.baseURL = 'http://ec2-15-164-215-142.ap-northeast-2.compute.amazonaws.com:3065';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(userSaga),
  ]);
}
