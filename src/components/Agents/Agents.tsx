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

  let allAgents: IAgent[] = agents
  if (allAgents) {
    allAgents = agents
  }

  const [show, setShow] = useState(false)

  const onFormShow = () => setShow(true)
  const onFormHide = () => setShow(false)

  return (
    <div>
      <div className="nav-sec">
        <button className="join-button" onClick={onFormShow}>
          Join the team
        </button>
      </div>

      {show && <AddAgent show={show} onClose={onFormHide} />}
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
