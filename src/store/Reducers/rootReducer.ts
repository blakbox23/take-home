import { combineReducers } from "redux";
import agentsReducer from'./agentsReducer'


const rootReducer = combineReducers({
  agents: agentsReducer,

});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;