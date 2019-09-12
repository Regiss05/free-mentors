// import {Pool} from 'pg';

const {Pool} = require('pg');
import dotenv from 'dotenv';

dotenv.config();
let pool = new Pool();
if (process.env.NODE_ENV === 'test') {
  pool = new Pool ({
  user : process.env.userTest,
  database : process.env.databaseTest,
  password : process.env.passwordTest,
  host: process.env.hostTest,
  });
}
else { pool = new Pool({
    connectionString : process.env.DATABASE_URL,
});
}


module.exports = pool;
