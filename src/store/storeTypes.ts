import { IAgent } from "../types/Agent";
import { agentTypes } from "./ActionTypes/Agenttypes";

export interface AgentsState {
    pending: boolean;
    error: string | null;
    agents: IAgent[];
    agent: IAgent | undefined;
  }

export interface FetchAgentsSuccessPayload {
    agents: IAgent[]; 
  }
  export interface FetchAgentsFailurePayload {
    error: string;
  }

export interface FetchAgents {
    type: typeof agentTypes.FETCH_AGENTS;
  }
  export type FetchAgentsSuccess = {
    type: typeof agentTypes.FETCH_AGENTS_SUCCESS;
    payload: FetchAgentsSuccessPayload;
  };
  export type FetchAgentsFailure = {
    type: typeof agentTypes.FETCH_AGENTS_FAILURE;
    payload: FetchAgentsFailurePayload;
  };



  export interface FetchAgentByIdSuccessPayload {
    agent: IAgent; 
  }
  export interface FetchAgentByIdFailurePayload {
    error: string;
  }

export interface FetchAgentById {
    type: typeof agentTypes.FETCH_AGENT_BYID;
    payload: string | number;
  }
  export type FetchAgentByIdSuccess = {
    type: typeof agentTypes.FETCH_AGENT_BYID_SUCCESS;
    payload: FetchAgentByIdSuccessPayload;
  };
  export type FetchAgentByIdFailure = {
    type: typeof agentTypes.FETCH_AGENT_BYID_FAILURE;
    payload: FetchAgentByIdFailurePayload;
  };

  

  export type AgentsActions =
  | FetchAgents
  | FetchAgentsSuccess
  | FetchAgentsFailure
  | FetchAgentById
  | FetchAgentByIdSuccess
  | FetchAgentByIdFailure