import Header from "./Header"
import styles from '../styles/Home.module.css'

function Layout({children}){
  return(
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
