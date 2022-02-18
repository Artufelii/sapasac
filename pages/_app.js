import '../styles/globals.css'
import { useState } from 'react'
import {UsersContext} from '../UsersContext'

function MyApp({ Component, pageProps }) {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  return(
    <UsersContext.Provider value={{
      users,
      setUsers,
      user,
      setUser,
    }}>
      <Component {...pageProps} />
    </UsersContext.Provider>
  ) 
}

export default MyApp
