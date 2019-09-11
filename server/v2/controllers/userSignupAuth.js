import {userObj, user} from '../models/user';
import responseFormatter from "../helpers/responseFormatter";
import pool from '../config/dbConfig';
import {getSignupQuery} from '../models/queries';
import createToken from '../helpers/createToken';

const signup = (req, res) => {
  const {
    firstName, 
    lastName, 
    email,  
    password, 
  } = req.body;

  let admin = false

  if(isAdmin && isAdmin == 'true') admin = true;
  else admin = false;


  pool.query(getSignupQuery([createToken(email), firstName, lastName, password, false, false]))
  .then(result => {
    if(result.rowCount > 0)
    return responseFormatter(res,201,'User created', result.rows,false);
  }).catch((err) => {
    if (err.constraint === 'users_email_key' || (err.routine && err.routine === '_bt_check_unique')) {
      return responseFormatter(res,409,'User not created', result.rows,false);
    }
  })
}

export default signup;
