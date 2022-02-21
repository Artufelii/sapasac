import dynamic from "next/dynamic"
import {useContext} from "react"
import {UsersContext} from "../UsersContext"

const ReportsDocument = dynamic(() => import('../components/Document'), {
  ssr: false,
})

function Print(){

  const { users, user } = useContext(UsersContext)

  const filterUsers = users.filter(({ date }) => {
    return new Date(date).toLocaleDateString() === new Date().toLocaleDateString()
  })

  return (
    <>
      {
        user.length !== 0 ? 
          <ReportsDocument users={user}/> :
          <ReportsDocument users={filterUsers}/>
      }
    </>
  ) 
  
}

export default Print
