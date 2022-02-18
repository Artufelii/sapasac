import Head from "next/head"
import {useContext} from "react"
import Form from "../components/Form"
import Layout from "../components/Layout"
import {UsersContext} from "../UsersContext"

function edit(){
  const { user } = useContext(UsersContext)

  return(
    <Layout>
      <Head>
        <title>Editar Reporte</title>
      </Head>
      <Form user={user} method='PUT' />
    </Layout>
  )
}

export default edit
