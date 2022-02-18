import Head from "next/head"
import Form from "../components/Form"
import Layout from "../components/Layout"

function reports(){
  return(
    <Layout>
      <Head>
        <title>Nuevo Reporte</title>
      </Head>
      <Form />
    </Layout>
    )
}

export default reports
