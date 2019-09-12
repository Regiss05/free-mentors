import { comparePassword } from '../helpers/hashPassword';
import { getSigninQuery, setUserTokenQuery } from '../models/Queries';
import pool from '../config/dbConfig';
import createToken from '../middlewares/createToken';
import responseFormatter from '../helpers/responseFormatter';

export default function login(req, res) {
  const { email, password } = req.body;

  const userDataArray = [email];
  pool.query(getSigninQuery(userDataArray))
    .then((result) => {
      if (result.rowCount > 0) {
        const user = result.rows[0];
        if (user && comparePassword(password, user.password)) {
          user.token = createToken(email, user.isadmin);
          delete user.password;
          pool.query(setUserTokenQuery([user.token, user.email])).catch((err) => {
            return responseFormatter(res,401,'Wrong email or password',undefined,true);
          });
          return responseFormatter(res,200,'User is successfully logged in', user,false);
              
              
        } else {
          return responseFormatter(res,401,'Wrong email or password',undefined,true);
        }
      } else {
        return responseFormatter(res,401,'Wrong email or password',undefined,true);
      }
    })
    .catch((err) => {
      return responseFormatter(res,401,'Wrong email or password',undefined,true);
    });
  return res;
}

