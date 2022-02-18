import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Header.module.css"
import sapasac from '../SAPASAC-IMAGOTIPO-HORIZONTAL.png'

function Header(){
  return(
    <header className={styles.container}>
      <div className={styles.image}>
        <Link href="/">
          <a><Image src={sapasac}/></a>
        </Link>
      </div>
      <ul className={styles.list}>
        <li>
          <Link href="/reportes">
            <a>Todos los Reportes</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Reportes de Hoy</a>
          </Link>
        </li>
        <li>
          <Link href="/reports">
            <a>Nuevo Reporte</a>
          </Link>
        </li>
      </ul>
    </header>
    )
}

export default Header
