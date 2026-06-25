import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import UserName from '../UserName/UserName'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="header__nav" aria-label="Navigation principale">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/profile">Profil</NavLink>
      </nav>
      <UserName />
    </header>
  )
}

export default Header
