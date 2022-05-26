import type { FC } from 'react'

import './AddAgent.css'

const AddAgent: FC<{}> = ({}) => {
  return (
    <div className="form">
      <p className="form-header">Become an Agent</p>
      <form action="/agents/add" method="POST">
        <div className="text-input-container">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="text" name="photoUrl" placeholder="Photo Url" required />
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
          <button className="cancel-button">Cancel</button>
          <input className="submit-button" type="submit" value="Join" />
        </div>
      </form>
    </div>
  )
}

export default AddAgent
