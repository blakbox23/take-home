import { all, fork } from "redux-saga/effects";
import AgentByIdSaga from "./AgentByIdSaga";
import FetchAgentsSaga from "./FetchAgentsSaga";

export default function* rootSaga() {
    yield all([
      fork(FetchAgentsSaga),
      fork(AgentByIdSaga),

  
    ]);
  }