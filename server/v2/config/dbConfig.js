import {Pool,Client} from 'pg';

const Pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usersdb',
  password: '199814M@r$',
  port: 5432
});



Pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    Pool(end);
});
