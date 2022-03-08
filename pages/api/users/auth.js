import { pool } from '../../../config/db'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function auth(req, res){
  switch (req.method) {
    case 'POST':
      const { user, password } = req.body
      const secret = process.env.NEXT_PUBLIC_SECRET

      const [response] = await pool.query('SELECT * FROM admin WHERE user = ?', [user])

      if (response.length === 0 || !(bcrypt.compareSync(password, response[0].password))) {
        return res.status(200).json({'message': 'Usuario o contraseña incorrecta'})
      } 

      const token = jwt.sign({data: user}, secret, { expiresIn: '9h' })

      return res.status(200).json({
        user: response[0].user,
        name: response[0].name,
        area: response[0].area,
        role: response[0].role,
        token
      });
  }
}

export default auth
