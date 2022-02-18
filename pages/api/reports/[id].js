import {pool} from "../../../config/db"

export default async function handler(req, res) {
  const { id } = req.query 

  switch (req.method) {
    case 'GET':
      const [response] = await pool.query(`SELECT * FROM usuarios WHERE id = ${id}`)
      return res
              .status(200)
              .json(response)

    case 'PUT':
      const {name, adress, colony, phone, mail, media, service, area, obs} = req.body

      await pool.query(
        'UPDATE usuarios SET name = ?, adress = ?, colony = ?, phone = ?, mail = ?, media = ?, service = ?, area = ?, obs = ? WHERE id = ?',
        [name, adress, colony, phone, mail, media, service, area, obs, id]
      )
      return res.status(200).json()
  }
}
