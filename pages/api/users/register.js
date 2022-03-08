import {pool} from '../../../config/db'

const bcrypt = require('bcrypt')

async function register(req, res){
  switch (req.method) {
    case 'POST':
      const { name, user, password, area, role } = req.body

      const [response] = await pool.query('SELECT * FROM admin WHERE user = ?', [user])

      if (response.length !== 0) {
        return res.status(200).json({'message': 'Usuario ya registrado'})
      }

      const hash = bcrypt.hashSync(password, 10)

      await pool.query('INSERT INTO admin SET ?', {
        name,
        user,
        area,
        role,
        password: hash
      })

      return res.status(200).json({'message': 'Usuario creado con exito'})
  }
}

export default register
