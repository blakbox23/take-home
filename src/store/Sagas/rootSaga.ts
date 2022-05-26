import { all, fork } from "redux-saga/effects";
import FetchAgentsSaga from "./FetchAgentsSaga";

export default function* rootSaga() {
    yield all([fork(FetchAgentsSaga)
  
    ]);
  }