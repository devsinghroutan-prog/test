import { useState } from 'react'
import Navbar from './navbar'
import BikeSection from './bikes'
import FriendsSection from './friends'
import MapSection from './map'
import ProfileSection from './profile'
import AboutSection from './about'

function HomePage() {
  const [activeSection, setActiveSection] = useState('home')
  const [notice, setNotice] = useState('')

  const navigateTo = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2500)
  }

  return (
    <div className="page-shell">
      <Navbar
        activeSection={activeSection}
        onNavigate={navigateTo}
        onJoinRide={() => showNotice('Ride request started!')}
      />

      {notice && <div className="toast" role="status">{notice}</div>}

      <main className="home-content">
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Weekend adventure</p>
            <h2>Find your next ride, together.</h2>
            <p>
              Discover scenic routes, connect with fellow riders, and track your next big trip
              from one dashboard.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => navigateTo('map')}>Plan Route</button>
              <button className="secondary-btn" onClick={() => showNotice('Your trips will appear here.')}>View Trips</button>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>24k</strong>
              <span>Riders</span>
            </div>
            <div>
              <strong>180+</strong>
              <span>Routes</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Rating</span>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div id="bikes">
            <BikeSection onSelectBike={(bike) => showNotice(`${bike} selected.`)} />
          </div>
          <div id="friends">
            <FriendsSection onInvite={(friend) => showNotice(`Ride invite sent to ${friend}.`)} />
          </div>
          <div id="map">
            <MapSection onStartRoute={() => showNotice('Route navigation started.')} />
          </div>
          <div id="profile">
            <ProfileSection onSave={() => showNotice('Profile updated successfully.')} />
          </div>
        </section>

        <AboutSection />
      </main>
    </div>
  )
}

export default HomePage



