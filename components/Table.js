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

  return(
    <table className={styles.table} id={id}>
      <thead>
        <tr>
          <th>Folio</th>
          <th>Fecha</th>
          <th>Nombre de Usuario</th>
          <th>Dirección</th>
          <th>Colonia</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Redes</th>
          <th>Servicio Solicitado</th>
          <th>Departamento</th>
          <th>Observaciones</th>
          <th>Imprimir</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map(({id, area, date, name, adress, colony, phone, mail, media, service, obs}) => (
          <tr key={id}>
            <td>
              {id < 10 
                ? `${area || 'ALCA'}000${id}` 
                : id < 100 && id >= 10 
                ? `${area || 'ALCA'}00${id}`
                : id < 1000 && id >= 100 
                ?`${area || 'ALCA'}0${id}`
                :`${area || 'ALCA'}${id}`
              }
            </td>
            <td>{new Date(date).toLocaleDateString()}</td>
            <td>{name}</td>
            <td>{adress}</td>
            <td>{colony}</td>
            <td>{phone}</td>
            <td>{mail}</td>
            <td>{media}</td>
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
            <td 
              onClick={() => handleClick(id, 'print')}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={ faPrint }/>
            </td>
            <td 
              onClick={() => handleClick(id, 'edit')}
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
