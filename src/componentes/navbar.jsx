const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Bikes', id: 'bikes' },
  { label: 'Friends', id: 'friends' },
  { label: 'Map', id: 'map' },
  { label: 'Profile', id: 'profile' },
]

function Navbar({ activeSection, onNavigate, onJoinRide }) {
  const handleNavClick = (event, id) => {
    event.preventDefault()
    onNavigate(id)
  }

  return (
    <header className="topbar">
      <div className="brand-area">
        <div className="brand-logo">R</div>
        <div>
          <p className="brand-name">RideFlow</p>
        </div>
      </div>

      <nav className="nav-menu" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={item.id === activeSection ? 'active' : ''}
            onClick={(event) => handleNavClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button className="nav-btn" onClick={onJoinRide}>Join Ride</button>
    </header>
  )
}

export default Navbar
