import dynamic from "next/dynamic"
import {useContext} from "react"
import {UsersContext} from "../UsersContext"

const ReportsDocument = dynamic(() => import('../components/Document'), {
  ssr: false,
})

function Print(){

  const { users, user } = useContext(UsersContext)

  return (
    <>
      {
        user.length !== 0 ? 
          <ReportsDocument users={user}/> :
          <ReportsDocument users={users}/>
      }
    </>
  ) 
  
}

export default Print
