import { createPool } from "mysql2/promise";

const pool = createPool({
  host: process.env.NEXT_PUBLIC_DATABASE_HOST,
  user: process.env.NEXT_PUBLIC_DATABASE_USER,
  password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD,
  port: process.env.NEXT_PUBLIC_DATABASE_PORT,
  database: process.env.NEXT_PUBLIC_DATABASE
})

export { pool }
