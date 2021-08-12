import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import logo from '../lock.svg'

function Navbar() {
  return (
    <header>
      <div id="container-branding">
        <img
          src={logo}
          alt="logo"
          height="30"
          width="30"
        />
        <h2>Encryption App</h2>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}

export default Navbar
