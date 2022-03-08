import Image from "next/image"
import styles from "../styles/Login.module.css"
import sapasac from '../SAPASAC-IMAGOTIPO-HORIZONTAL.png'
import {useEffect, useState} from "react";
import {logIn} from "../helpers";
import {useRouter} from "next/router";

function Login(){

  const router = useRouter()

  const [data, setData] = useState({
    user: '',
    password: '',
  });
  const [message, setMessage] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()

    logIn(data)
      .then(({data}) => {
        if (data.message) {
          setMessage(data.message)
        } else {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.name)
          router.push('/')
        }
      })
  }

  const handleChange = ({target: {name, value}}) => {
    setData({...data, [name]: value})
  }

  useEffect(() => {
    router.prefetch('/')
  });
  

  return(
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.image}>
          <Image src={sapasac} />
        </div>
        <div className={styles.margin}>
          <label htmlFor="user">Usuario:</label>
          <input 
            className={styles.input}
            type="text" 
            id="user" 
            name="user"
            onChange={handleChange}
          />
        </div>
        <div className={styles.margin}>
          <label htmlFor="password">Contraseña:</label>
          <input 
            className={styles.input}
            type="password" 
            id="password" 
            name="password" 
            onChange={handleChange}
          />
        </div>
        <button 
          className={styles.button}
          type="submit"
        >
          Entrar
        </button>
        {message &&
          <p className={styles.error}>
            {message}
          </p>
        }
      </form>
    </div>
  )
}

export default Login
