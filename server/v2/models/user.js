import createToken from '../helpers/createToken';
import pool from '../config/dbconfig';


export class user {
  async save(user){
    const {userName, password, email, isMentor} = user;

    const queryString = {
      text: `INSERT INTO users (userName, password, email, isMentor)
      VALUES($1, $2, $3, $4) RETURNING*;`
      values: [userName, password, email, isMentor]
    };
    const { rows } = await pool.query(queryString);
    return rows
  }
}

const obj = new user(
  1,
  'lenovo@lemoisson.com',
  'lenovo',
  'thinkpad',
  'rec',
)

export const userObj = [obj];
