import type { FC } from 'react'
import './AddAgent.css'

interface AddAgentProps {
  show: boolean
  onClose: any
}

const AddAgent: FC<AddAgentProps> = ({ show, onClose }) => {
  const Modal = (show: boolean) => {
    if (show) {
      return null
    }
  }

  return (
    <div className="form">
      <div className="form-content">
        <p className="form-header">Become an Agent</p>
        <form action="/agents/add" method="POST">
          <div className="text-input-container">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo Url"
              required
            />
            <input
              type="text"
              name="agentLicence"
              placeholder="Agent licence"
              required
            />
            <input type="text" name="address" placeholder="address" />
            <input
              type="text"
              name="practiceAreas"
              placeholder="practiceAreas"
              required
            />
          </div>
          <textarea name="aboutMe" placeholder="About me" required />
          <div className="form-buttons">
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <input className="submit-button" type="submit" value="Join" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAgent
