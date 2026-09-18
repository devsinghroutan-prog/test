import { useState } from 'react'
import HomePage from './componentes/home'
import './App.css'

const DEMO_EMAIL = 'rider@gmail.com'
const DEMO_PASSWORD = '123456'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState(DEMO_EMAIL)
  const [password, setPassword] = useState(DEMO_PASSWORD)
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    if (!email || !password) {
      setError('Email or password cannot be empty.')
      return
    }

    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setError(`Invalid email or password. Use ${DEMO_EMAIL} / ${DEMO_PASSWORD}`)
      return
    }

    setError('')
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    return <HomePage />
  }

  return (
    <div className="login-shell">
      <div className="login-card">
        <div className="brand-block">
          <span className="brand-chip">RideFlow</span>
          <h1>Welcome rider</h1>
         
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="primary-btn">Login</button>

          <div className="login-footer">
            <span>New here?</span>
            <a href="#">Create account</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
