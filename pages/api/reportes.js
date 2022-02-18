import {pool} from "../../config/db"

export default async function handler(req, res) {
    if (req.method === 'GET') {
      const [response] = await pool.query('SELECT * FROM usuarios')
      return res
              .status(200)
              .json(response)
    }
}
