import type { FC } from 'react'
import { useState, useEffect } from 'react'
import Agent from './Agent'
import { IAgent } from '../../types/Agent'
import axios from 'axios'
import './Agents.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAgents } from '../../store/Actions/AgentsActions'
import { RootState } from '../../store/Reducers/rootReducer'

const Agents: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAgents())
  }, [dispatch])

  const { pending, agents, error } = useSelector(
    (state: RootState) => state.agents,
  )

  return (
    <div className="agents">
      {agents.map((agent) => (
        <Agent key={agent.id} agent={agent} />
      ))}
    </div>
  )
}

export default Agents
