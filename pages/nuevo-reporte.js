import Head from "next/head"
import {useRouter} from "next/router"
import {useEffect} from "react"
import Form from "../components/Form"
import Layout from "../components/Layout"
const jwt = require('jsonwebtoken');

function NewReport(){

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.replace('/login')
    } else {
      jwt.verify(token, process.env.NEXT_PUBLIC_SECRET, function(err, decoded) {
        if (err) {
          router.replace('/login')
        }
      })
    }
  })

  return(
    <Layout>
      <Head>
        <title>Nuevo Reporte</title>
      </Head>
      <Form />
    </Layout>
    )
}

export default NewReport 
