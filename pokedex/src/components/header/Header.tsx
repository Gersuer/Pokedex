import { Link } from 'react-router-dom'
import logo from '../../assets/pokemon.svg'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav className={styles.header_nav}>
        <Link className={styles.header_link} to='/list'>Ver Todos</Link>
      </nav>
    </header>
  )
}

export default Header