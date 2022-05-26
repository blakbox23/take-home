import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAgentById } from '../../store/Actions/AgentsActions'
import { RootState } from '../../store/Reducers/rootReducer'
import { IAgent } from '../../types/Agent'

import './AgentDetails.css'

const AgentDetails: FC<{}> = () => {
  const { id } = useParams() as any

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAgentById(id))
  }, [dispatch])

  const { pending, agent, error } = useSelector(
    (state: RootState) => state.agents,
  )

  return <>Agent is {agent?.firstName}</>
}

export default AgentDetails
