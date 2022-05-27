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

  const [searchedState, setSearchedState] = useState(false)
  const [searchedAgents, setSearchedAgents] = useState([])

  let searchResult: any

  const handleSearchSubmit = (e: any) => {
    e.preventDefault()
    let searched = e.target.term.value
    if (!searched.length) {
      setSearchedState(false)
      setSearchedAgents([])
    } else {
      setSearchedState(true)
      searchResult = allAgents.filter((agent) =>
        ((agent.practiceAreas as unknown) as string)
          .split(',')
          .includes(searched),
      )
      setSearchedAgents(searchResult)
    }
  }

  return (
    <div>
      <div className="nav-sec">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            className="search-term"
            type="text"
            name="term"
            placeholder="Search by area of practice..."
          />
          <input className="search-submit" value="Search" type="submit" />
        </form>

        <button className="join-button" onClick={onFormShow}>
          Join the Team!
        </button>
      </div>
      {show && <AddAgent show={show} onClose={onFormHide} />}
      {searchedState && searchedAgents.length < 1 ? (
        <div className="search-result-div">
          <button
            className="back-button"
            onClick={() => setSearchedState(false)}
          >
            Back to all Agents
          </button>
          <p className="search-result-text">No Results Found</p>
        </div>
      ) : searchedAgents && searchedState ? (
        <div className="search-result-div">
          <button
            className="back-button"
            onClick={() => setSearchedState(false)}
          >
            Back to all Agents
          </button>
          <div className="agents">
            {searchedAgents.map((agent: IAgent) => (
              <Agent key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      ) : (
        <div className="agents">
          {allAgents &&
            allAgents.map((agent: IAgent) => (
              <Agent key={agent.id} agent={agent} />
            ))}
        </div>
      )}
    </div>
  )
}

export default Agents
