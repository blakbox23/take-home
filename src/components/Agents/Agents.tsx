import React, { useState } from 'react'
import { useEffect } from 'react'
import Agent from './Agent'
import './Agents.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Reducers/rootReducer'
import { IAgent } from '../../types/Agent'
import AddAgent from './AddAgent'

const Agents = () => {
  const { error, agents, pending } = useSelector(
    (state: RootState) => state.agents,
  )

  const [showForm, setShowForm] = useState(false)

  const openForm = () => {
    setShowForm(!showForm)
  }

  let allAgents: IAgent[] = agents

  if (allAgents) {
    allAgents = agents
  }

  return (
    <div>
      {showForm && <AddAgent />}
      <button onClick={openForm}>Join Agents</button>
      <div className="agents">
        {allAgents &&
          allAgents.map((agent: IAgent) => (
            <Agent key={agent.id} agent={agent} />
          ))}
      </div>
    </div>
  )
}

export default Agents
