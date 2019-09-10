import { Pool, client } from "pg";

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '199814M@r$',
    port: 5432
}); 

pool.query('SELECT ')

