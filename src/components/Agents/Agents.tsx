import React from 'react'
import { useEffect } from 'react'
import Agent from './Agent'
// import { IAgent } from '../../types/Agent'
import './Agents.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Reducers/rootReducer'
import { IAgent } from '../../types/Agent'

const Agents = () => {
  const { error, agents, pending } = useSelector(
    (state: RootState) => state.agents,
  )

  let allAgents: IAgent[] = agents

  if (allAgents) {
    allAgents = agents
  }

  return (
    <div className="agents">
      {allAgents &&
        allAgents.map((agent: IAgent) => (
          <Agent key={agent.id} agent={agent} />
        ))}
    </div>
  )
}

export default Agents
