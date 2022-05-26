import { put, call, takeLatest, all } from 'redux-saga/effects';
import { agentsApi } from '../agentsApi';
import { fetchagentsFailure, fetchagentsSuccess } from '../Actions/AgentsActions';
import { agentTypes } from '../ActionTypes/Agenttypes';

function* workFetchAgents(): any {
    try {
       const responseData = yield call(agentsApi.getAgents);
     
    yield put(
        fetchagentsSuccess({
          agents: responseData
        })
      );
    } catch (e: any) {
      yield put(
        fetchagentsFailure({
          error: e.message
        })
      ); 
    }
  }

function* FetchAgentsSaga() {
    yield all([takeLatest(agentTypes.FETCH_AGENTS, workFetchAgents)])
}



export default FetchAgentsSaga;