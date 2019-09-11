// import {Pool} from 'pg';

const {Pool} = require('pg');

  let pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usersdb',
  password: '199814M@r$',
  port: 5432
});



pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    
});

module.exports = pool;
