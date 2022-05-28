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

  return (
    <>
      <div className="agent-details">
        <h1>Agent Profile</h1>
        <div className="sect1-details">
          <div className="sect1-details-image ">
            <img src={agent?.photoUrl} />
          </div>
          <div className="sect1-details-text ">
            <div>
              <span className="bold">First Name</span>: {agent?.firstName}
            </div>
            <div>
              <span className="bold">Last Name</span>: {agent?.lastName}
            </div>
            <div>
              <span className="bold">Address</span>: {agent?.address}
            </div>
            <div>
              <span className="bold">Area of Practice</span>:{' '}
              {agent?.practiceAreas}
            </div>
            <div>
              <span className="bold">Agent Licence</span>: {agent?.agentLicence}
            </div>
          </div>
        </div>
        <div className="sect1-details">
          <div className="details-about">
            <h2>About {agent?.firstName}</h2>
            <p>{agent?.aboutMe}</p>
          </div>
        </div>
        <h2>Review</h2>
        <div className="sect1-details">
          <div className="review-section">
            <form className="review-form">
              <textarea placeholder="Leave a review" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgentDetails
