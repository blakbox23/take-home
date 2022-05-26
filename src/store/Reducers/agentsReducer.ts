import { agentTypes } from '../ActionTypes/Agenttypes';
import { AgentsState, AgentsActions } from '../storeTypes';
  

const initialState: AgentsState = {
    pending: false,
    error: null,
    agents: [],
    agent: undefined,
  };


const agentsReducer = (state = initialState, action: AgentsActions) => {
    switch (action.type) {

        case agentTypes.FETCH_AGENTS:
        return {
            ...state,
            pending: true,
        };

        case agentTypes.FETCH_AGENTS_SUCCESS: 
        return {
        ...state,
        pending: false,
        agents: action.payload.agents,
        error: null
      };

      case agentTypes.FETCH_AGENTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
            
      default:
            return {
                ...state
            };
    }
};

export default agentsReducer

