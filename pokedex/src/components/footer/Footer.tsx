import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom';
import { FaGithubAlt, FaInstagram } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_container}>
        <NavLink
          target='_blank'
          to='https://github.com/Gersuer'>
          <FaGithubAlt className={styles.icon} />
        </NavLink>

        <NavLink
          target='_blank'
          to='https://www.instagram.com/gersueroliveira/'>
          <FaInstagram className={styles.icon} />
        </NavLink>
      </section>
    </footer>
  )
}

export default Footer