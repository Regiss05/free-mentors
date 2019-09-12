import {userObj, user} from '../models/user';
import responseFormatter from "../helpers/responseFormatter";
import pool from '../config/dbConfig';
import {getSignupQuery} from '../models/queries';
import createToken from '../helpers/createToken';
import { hashPassword } from '../helpers/hashPassword';

const signup = (req, res) => {
  const {
    firstName, 
    lastName, 
    email,  
    password, 
    isAdmin
  } = req.body;

  let admin = false

  if(isAdmin && isAdmin === 'true') admin = true;
  else admin = false;


  pool.query(getSignupQuery([createToken(email, admin),email, firstName, lastName, hashPassword(password), admin, false]))
  .then(result => {
    if(result.rowCount > 0){
    delete result.rows[0].password;
    return responseFormatter(res,201,'User created', result.rows,false);
    }
  }).catch((err) => {
    if (err.constraint === 'users_email_key' || (err.routine && err.routine === '_bt_check_unique')) {
      
      return responseFormatter(res,409,'User not created', undefined,false);
    }
  })
}

export default signup;
