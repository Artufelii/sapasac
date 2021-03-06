import {pool} from "../../../config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const [response] = await pool.query('SELECT * FROM usuarios ORDER BY id DESC')
      return res
              .status(200)
              .json(response)

    case 'POST':
      const {name, adress, colony, phone, mail, media, service, area, obs, employe} = req.body

      const [result] = await pool.query('INSERT INTO usuarios SET ?', {
        name, 
        adress,
        colony,
        phone,
        mail,
        media,
        service,
        area,
        obs,
        employe
      })

      return res
              .status(200)
              .json({name, adress, colony, phone, service, area, obs, id: result.insertId})
    
    
    default:
      return res.status(200)
  }
}
