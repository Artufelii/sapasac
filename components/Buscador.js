import axios from 'axios'
import styles from '../styles/Form.module.css'

function Buscador({ users, setUsers, url }){

  const handleSubmit = (e) => {
    e.preventDefault()

    const { target } =  e

    const busqueda = target[0].value.toLowerCase()

    const filter = (user) => {
      const name = user.name.toLowerCase()
      const adress = user.adress.toLowerCase()
      const colony = user.colony.toLowerCase()
      const phone = user.phone.toLowerCase()
      const service = user.service.toLowerCase()
      const area = user.area.toLowerCase() 
      const id = user.id
      const date = user.date
      let folio 
      let departamento

      switch (true) {
        case id < 10:
          folio = `${area || 'alca'}000${id.toString()}` 
          break;
        case id < 100 && id >= 10:
          folio = `${area || 'alca'}00${id.toString()}` 
          break;
        case id < 1000 && id >= 100:
          folio = `${area || 'alca'}0${id.toString()}` 
          break;
        default:
          folio = `${area || 'alca'}${id.toString()}` 
      }

      switch (area) {
        case 'ap':
          departamento = 'agua potable' 
          break;
        case 'pipa':
          departamento = 'pipas' 
          break;
        case 'cons':
          departamento = 'construcción' 
          break;
        default:
          departamento = 'alcantarillado' 
      }

      const normalDate = new Date(date).toLocaleString()

      return (
        name.indexOf(busqueda) !== -1 ||
        adress.indexOf(busqueda) !== -1 ||
        departamento.indexOf(busqueda) !== -1 ||
        colony.indexOf(busqueda) !== -1 ||
        phone.indexOf(busqueda) !== -1 ||
        folio.indexOf(busqueda) !== -1 ||
        service.indexOf(busqueda) !== -1 ||
        normalDate.indexOf(busqueda) !== -1 
      )
    }

    const result = users.filter(filter)
    setUsers(result)
  }

  const handleChange = async ({target: { value }}) => {
    if (value === '') {
      const {data} = await axios({
        method: 'GET',
        url: `/api/${url}`,
      })

      setUsers(data)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Buscar..." 
        className={styles.buscador} 
        onChange={handleChange}
      />
      <button className={styles.btn} type="submit">BUSCAR</button>
    </form>
  )
}

export default Buscador