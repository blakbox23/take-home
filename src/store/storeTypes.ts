import { IAgent } from "../types/Agent";
import { agentTypes } from "./ActionTypes/Agenttypes";

export interface AgentsState {
    pending: boolean;
    error: string | null;
    agents: IAgent[] | [];
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

  export type AgentsActions =
  | FetchAgents
  | FetchAgentsSuccess
  | FetchAgentsFailure