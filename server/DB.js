import { createPool } from "mysql2/promise";

export const pool = createPool({
  connectionLimit: 10,
  acquireTimeout: 30000, //30 secs
  host: 'containers-us-west-98.railway.app',
  port: 5934,
  user: 'root',
  password: 'ZlVUcgLAGLdlIXEckjWM',
  database: "railway",
  
});
