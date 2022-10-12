import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'us-east.connect.psdb.cloud',
  user: 'al9f9p9gnxogx9v1zu3k',
  password: 'pscale_pw_AVx1s4gbDvgxcZA70xUBmRP12BIEBUxS4iTA4TvUoVs',
  database: "ghibli",
  ssl: {
    rejectUnauthorized: false
  }
});
