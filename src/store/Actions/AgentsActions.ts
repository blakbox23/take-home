import { agentTypes } from '../ActionTypes/Agenttypes'
import{ FetchAgents, 
    FetchAgentsFailure, 
    FetchAgentsFailurePayload, 
    FetchAgentsSuccess, 
    FetchAgentsSuccessPayload,
    FetchAgentById,
    FetchAgentByIdSuccess,
    FetchAgentByIdFailure,
    FetchAgentByIdSuccessPayload,
    FetchAgentByIdFailurePayload

    } from "../storeTypes";

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

export const fetchAgentById = (id: string | number): FetchAgentById => ({ 
    type: agentTypes.FETCH_AGENT_BYID,
    payload: id
  });
  export const fetchAgentByIdSuccess = (payload: FetchAgentByIdSuccessPayload): FetchAgentByIdSuccess => ({
    type: agentTypes.FETCH_AGENT_BYID_SUCCESS,
    payload
  });
  export const fetchAgentByIdFailure = (payload: FetchAgentByIdFailurePayload): FetchAgentByIdFailure => ({
    type: agentTypes.FETCH_AGENT_BYID_FAILURE,
    payload
  }); 