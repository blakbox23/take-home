import { agentTypes } from '../ActionTypes/Agenttypes'
import{ FetchAgents, FetchAgentsFailure, FetchAgentsFailurePayload, FetchAgentsSuccess, FetchAgentsSuccessPayload } from "../storeTypes";

export const fetchAgents = (): FetchAgents => ({ 
    type: agentTypes.FETCH_AGENTS
  });
  export const fetchagentsSuccess = (payload: FetchAgentsSuccessPayload): FetchAgentsSuccess => ({
    type: agentTypes.FETCH_AGENTS_SUCCESS,
    payload
  });
  export const fetchagentsFailure = (payload: FetchAgentsFailurePayload): FetchAgentsFailure => ({
    type: agentTypes.FETCH_AGENTS_FAILURE,
    payload
  }); 