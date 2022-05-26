import { FC, useEffect } from 'react'
import './App.css'

import Agents from '../Agents/Agents'
import { Route, Routes } from 'react-router-dom'
import AgentDetails from '../Agents/AgentDetails'
import { fetchAgents } from '../../store/Actions/AgentsActions'
import { useDispatch } from 'react-redux'

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAgents())
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Agents />} />
        <Route path="/agents/:id" element={<AgentDetails />} />
      </Routes>
    </div>
  )
}

export default App
function useDispathch() {
  throw new Error('Function not implemented.')
}
