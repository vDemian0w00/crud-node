import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'containers-us-west-98.railway.app',
  port: 5934,
  user: 'root',
  password: 'ZlVUcgLAGLdlIXEckjWM',
  database: "railway",
  ssl: {
    rejectUnauthorized: false
  }
});
