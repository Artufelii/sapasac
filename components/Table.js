import styles from '../styles/Table.module.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {useContext} from 'react'
import {UsersContext} from '../UsersContext'
import {useRouter} from 'next/router'

function Table({users, id = ''}){

  const { setUser } = useContext(UsersContext)
  const router = useRouter()

  const handleClick = async(id, route) => {
    const {data} = await axios({
      method: 'GET',
      url: `/api/reports/${id}`,
    })

    setUser(data)
    router.push(`/${route}`)

    setTimeout(() => setUser([]), 6000*10*5)
  }

  const daysPassed = (date1, date2) => {
    return Math.round((date2.getTime() - date1.getTime()) / 86400000)
  }


  return(
    <table className={styles.table} id={id}>
      <thead>
        <tr className={styles.tr}>
          <th>Folio</th>
          <th>Fecha</th>
          <th>Nombre de Usuario</th>
          <th>Dirección</th>
          <th>Colonia</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Servicio Solicitado</th>
          <th>Departamento</th>
          <th>Observaciones</th>
          <th>Registrado por</th>
          <th>Imprimir</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map(({id: userId, area, date, name, adress, colony, phone, mail, service, obs, status, employe}) => (
          <tr 
            key={userId}
            className={
             daysPassed(new Date(date), new Date()) >= 2 && daysPassed(new Date(date), new Date()) < 5 && !status ? 
                styles.amarillo:
             daysPassed(new Date(date), new Date()) >= 5 && !status ? 
                styles.rojo:
             status &&
                styles.verde 
            }
          >
            <td>
              {userId < 10 
                ? `${area || 'ALCA'}000${userId}` 
                : userId < 100 && userId >= 10 
                ? `${area || 'ALCA'}00${userId}`
                : userId < 1000 && userId >= 100 
                ?`${area || 'ALCA'}0${userId}`
                :`${area || 'ALCA'}${userId}`
              }
            </td>
            <td>{new Date(date).toLocaleDateString()}</td>
            <td>{name}</td>
            <td>{adress}</td>
            <td>{colony}</td>
            <td>{phone}</td>
            <td>{mail}</td>
            <td>{service}</td>
            <td>
              {area === 'AP' 
                ? 'Agua Potable' 
                : area === 'PIPA'
                ? 'Pipas'
                : area === 'CONS'
                ? 'Contrucción'
                : 'Alcantarillado'
              }
            </td>
            <td>{obs}</td>
            <td>{employe}</td>
            <td 
              onClick={() => handleClick(userId, 'print')}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={ faPrint }/>
            </td>
            <td 
              onClick={() => handleClick(userId, 'edit')}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={ faPenToSquare }/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}

export default Table
