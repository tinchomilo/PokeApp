import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={ styles.containerNav }>
      <nav className={ styles.navMain }>
          <header className={ styles.headerContainer }>
            <strong>PokeApp</strong>
          </header>
      </nav>
    </div>
  )
}