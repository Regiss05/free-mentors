
import createToken from '../helpers/createToken';
import Model from '../models/index';
import pool from '../config/dbConfig';

class userModel extends Model{
  constructor(){
    super();
  }

  async createUser(datas, model){
    const {firstName, lastName, password, email} = datas;
    const queryString = {
      text: `INSERT INTO USERS
      (firstName, LastName, email, password)
      VALUES($1, $2, $3, $4) RETURNING*;`,
      values: [firstName, lastName, password, email]
    };
    const {rows} = await pool.query(queryString);
    const firstUser = this.first();
    return firstUser.id === rows[0].id ? this.isAdmin(rows[0].id) : rows[0];
  }
  
  async first(){
    const queryString = {
      text = `SELECT id, email FROM users LIMIT 1;`,
      values: []
    };

    const {rows} = await pool.query(queryString);
    return rows[0]
  }
  async userExist(email){
    const queryString = {
      text = `SELECT email FROM users WHERE email = $1`,
      values: []
    }

    const {rows} = await pool.query(queryString);
    return rows[0]
  }

} 

