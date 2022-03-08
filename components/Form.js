import axios from 'axios'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import styles from '../styles/Form.module.css'

function Form({ user = [], method = 'POST', status = false}){

  const router = useRouter()

  const [usuario] = user
  const url = user.length !== 0 ? `/api/reports/${usuario.id}` : '/api/reports'

  const [data, setData] = useState({
    name: user.length !== 0 ? usuario.name : '',
    adress: user.length !== 0 ? usuario.adress : '',
    colony: user.length !== 0 ? usuario.colony : '',
    phone: user.length !== 0 ? usuario.phone : '',
    mail: user.length !== 0 ? usuario.mail : '',
    media: user.length !== 0 ? usuario.media : '',
    service: user.length !== 0 ? usuario.service : '',
    area: user.length !== 0 ? usuario.area : 'ALCA',
    obs: user.length !== 0 ? usuario.obs : '',
    employe: '',
    status: user.length !== 0 ? usuario.status : 0,
  })

  

  useEffect(() => {
    const register = localStorage.getItem('user')
    setData({...data, employe: register})
  }, [setData]);
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios({
      method,
      url,
      data 
    })

    router.push('/')
  }

  const handleChange = ({target: {name, value}}) => {
    setData({...data, [name]: value})
  }

  return(
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre de Usuario:</label>
      <input className={styles.input} type="text" id="name" name="name" placeholder="Nombre de Usuario" onChange={handleChange} defaultValue={user.length !== 0 ? usuario.name : ''} />
      <label htmlFor="adress">Dirección:</label>
      <input className={styles.input} type="text" id="adress" name="adress" placeholder="Dirección" onChange={handleChange} defaultValue={user.length !== 0 ? usuario.adress : ''}/>
      <label htmlFor="colony">Colonia:</label>
      <input className={styles.input} type="text" id="colony" name="colony" placeholder="Colonia" onChange={handleChange} defaultValue={user.length !== 0 ? usuario.colony : ''}/>
      <label htmlFor="phone">Telefono:</label>
      <input className={styles.input} type="text" id="phone" name="phone" placeholder="Telefono" onChange={handleChange} defaultValue={user.length !== 0 ? usuario.phone : ''} />
      <label htmlFor="mail">Correo Electronico:</label>
      <input className={styles.input} type="text" id="mail" name="mail" placeholder="Correo Electronico" onChange={handleChange} defaultValue={user.length !== 0 ? usuario.mail : ''} />
      <label htmlFor="media">Redes Sociales:</label>
      <input className={styles.input} type="text" id="media" name="media" placeholder="Redes Sociales" onChange={handleChange} defaultValue={user.length !== 0 ? usuario.media : ''} />
      <label htmlFor="service">Servicio Solicitado:</label>
      <input className={styles.input} type="text" id="service" name="service" placeholder="Servicio Solicitado" onChange={handleChange} defaultValue={user.length !== 0 ? usuario.service : ''} />
      <label htmlFor="area" className={styles.label}>Departamento:</label>
      <select id="area" name="area" className={styles.select} defaultValue={user.length !== 0 ? usuario.area : 'ALCA'} onChange={handleChange}>
        <option value="ALCA">Alcantarillado</option>
        <option value="AP">Agua Potable</option>
        <option value="CONS">Contrucción</option>
        <option value="PIPA">Pipa</option>
      </select>
      {status &&
        <>
          <label htmlFor="status">Estado:</label>
          <select id="status" name="status" className={styles.select} defaultValue={user.length !== 0 ? usuario.status : 0} onChange={handleChange}>
            <option value={1}>Atendido</option>
            <option value={0}>Pendiente</option>
          </select>
        </>
      }
      <label htmlFor="obs">Observaciones:</label>
      <textarea id="obs" name="obs" placeholder="Observaciones" className={styles.textarea} onChange={handleChange} defaultValue={user.length !== 0 ? usuario.obs : ''} ></textarea>
      <button type="submit" className={styles.button}>Guardar</button>
    </form>
    )
}

export default Form
