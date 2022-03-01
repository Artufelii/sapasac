import { Document, Page, View, Text, PDFViewer, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
  },

  title: {
    width: '100%',
    textAlign: 'center',
    marginTop: '26px',
  },

  section: {
    margin: '5px 0',
  },

  span: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },

  text: {
    flex: 1,
    border: '1px solid #000',
    padding: '5px',
    fontSize: '10px',
    alignSelf: 'center',
    width: '500px',
  },

  textcenter: {
    flex: 1,
    border: '1px solid #000',
    padding: '5px',
    fontSize: '10px',
    alignSelf: 'center',
    textAlign: 'center',
  },

  text2: {
    flex: 2,
    border: '1px solid #000',
    padding: '5px',
    fontSize: '10px',
    alignSelf: 'center',
    width: '500px',
  },

  textarea: {
    flex: 2,
    border: '1px solid #000',
    padding: '5px',
    fontSize: '10px',
    alignSelf: 'center',
    height: '60px',
  },

  textsection: {
    flex: 2,
    border: '1px solid #000',
    padding: '5px',
    fontSize: '10px',
    alignSelf: 'center',
    textAlign: 'center',
    height: '30px',
  },

  largeText: {
    flex: 2,
    border: '1px solid #000',
    padding: '5px',
    fontSize: '10px',
    alignSelf: 'center',
    textAlign: 'center',
    width: '600px',
  },

  largeBox: {
    flex: 2,
    width: '600px',
    height:'15px', 
    border: '1px solid #000',
    padding: '5px',
  },

  box: {
    flex: 1,
    height:'15px', 
    border: '1px solid #000',
    padding: '5px',
  }


})

const ReportsDocument = ({ users }) => {

  return(
    <PDFViewer style={styles.container}>
      <Document>
        {users.map(({id, name, adress, colony, date, service, obs, area, phone}) => ( 
          <Page 
            size='LETTER' 
            key={id} 
            style={{
              backgroundImage: 'url("https://res.cloudinary.com/fragmods/image/upload/v1645036180/sapasac/fondo_zcbped.png")',
              backgroundSize: 'cover',
              padding: '40px',
            }}
          >
            <View style={styles.title}>
              <Text>REPORTE DE ATENCION CIUDADANA</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.text}>Fecha de Reporte: {new Date(date).toLocaleString()}</Text>
                <Text style={styles.text}>
                  No. de Reporte: {id < 10 
                    ? `${area || 'ALCA'}000${id}` 
                    : id < 100 && id >= 10 
                    ? `${area || 'ALCA'}00${id}`
                    : id < 1000 && id >= 100 
                    ?`${area || 'ALCA'}0${id}`
                    :`${area || 'ALCA'}${id}`
                  }
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.text2}>Usuario: {name}</Text>
                <Text style={styles.text2}>Telefono: {phone}</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.text2}>Domicilio: {adress}, {colony}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.text}>
                  Departamento: {area === 'AP' 
                    ? 'Agua Potable' 
                    : area === 'PIPA'
                    ? 'Pipas'
                    : area === 'CONS'
                    ? 'Construcción'
                    : 'Alcantarillado'
                  }
                </Text>
                <Text style={styles.text}>Servicio: {service}</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.textarea}>Observaciones: {obs}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.textcenter}>Supervisor</Text>
                <Text style={styles.textcenter}>Responsable de Área</Text>
                <Text style={styles.textcenter}>Ejecutor</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.textsection}></Text>
                <Text style={styles.textsection}>
                  {area === 'AP' 
                    ? 'Ing. Humberto Tovar' 
                    : area === 'PIPA'
                    ? 'Lic. Javier Madero'
                    : area === 'CONS'
                    ? 'C. Rene Bujanos'
                    : 'Lic. Victor Hugo Madero'
                  }
                </Text>
                <Text style={styles.textsection}></Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.textcenter}>Trabajo Realizado</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.textarea}></Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.largeText}>Servicio Realizado</Text>
                <Text style={styles.textcenter}>Cantidad</Text>
                <Text style={styles.textcenter}>U. de Medida</Text>
                <Text style={styles.textcenter}>No. de Unidad</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.largeBox}></Text>
                <Text style={styles.box}></Text>
                <Text style={styles.box}></Text>
                <Text style={styles.box}></Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.largeBox}></Text>
                <Text style={styles.box}></Text>
                <Text style={styles.box}></Text>
                <Text style={styles.box}></Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.largeBox}></Text>
                <Text style={styles.box}></Text>
                <Text style={styles.box}></Text>
                <Text style={styles.box}></Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.textcenter}>Comentarios del Ciudadano</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.textarea}></Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.textcenter}>Como califica el servicio</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.text}>Malo</Text>
                <Text style={styles.text}>Regular</Text>
                <Text style={styles.text}>Bueno</Text>
                <Text style={styles.text}>Excelente</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.span}>
                <Text style={styles.textcenter}>Realizo</Text>
                <Text style={styles.textcenter}>Conformidad</Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.textsection}></Text>
                <Text style={styles.textsection}></Text>
              </View>
              <View style={styles.span}>
                <Text style={styles.textcenter}>Jefe de Cuadrilla</Text>
                <Text style={styles.textcenter}>Firma del Ciudadano</Text>
              </View>
            </View>
          </Page>
        ))} 
      </Document>
    </PDFViewer>
  )
}

export default ReportsDocument
