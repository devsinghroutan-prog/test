import { useState } from 'react'

function ProfileSection({ onSave }) {
  const [name, setName] = useState('Shivam')
  const [editing, setEditing] = useState(false)

  const saveProfile = () => {
    setEditing(false)
    onSave()
  }
  return (
    <section className="info-panel profile-panel">
      <div className="panel-header">
        <h3>Profile</h3>
        <button className="item-action" onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</button>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">S</div>
        <div>
          {editing ? <input className="profile-input" value={name} onChange={(event) => setName(event.target.value)} /> : <h4>{name}</h4>}
          <p>Level 12 rider</p>
        </div>
      </div>

      <div className="stats-row">
        <div>
          <strong>185</strong>
          <span>Rides</span>
        </div>
        <div>
          <strong>3.2k</strong>
          <span>Km</span>
        </div>
      </div>
      {editing && <button className="primary-btn save-profile" onClick={saveProfile}>Save profile</button>}
    </section>
  )
}

export default ProfileSection
