import { put, call, takeEvery, all } from 'redux-saga/effects';
import { agentsApi } from '../agentsApi';
import { agentTypes } from '../ActionTypes/Agenttypes';
import { fetchAgentByIdFailure, fetchAgentByIdSuccess } from '../Actions/AgentsActions';

function* workAgentByIdSaga(action:any): any {
  console.log('actionpayload saga')
  console.log(action.payload)
    try {
       const responseData = yield call(agentsApi.getAgentById, action.payload); 
      
    yield put(
      fetchAgentByIdSuccess({
          agent: responseData
        })
      );

    } catch (e: any) {
      yield put(
        fetchAgentByIdFailure({
          error: e.message
        })
      ); 
    }
  }

function* AgentByIdSaga() {
    yield all([takeEvery(agentTypes.FETCH_AGENT_BYID, workAgentByIdSaga)])
}

export default AgentByIdSaga;