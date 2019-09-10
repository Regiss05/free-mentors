import {userObj} from '../models/user';
import createToken from '../helpers/createToken';
import responseFormatter from "../helpers/responseFormatter";

const login = (req, res, next) => {

  const {email, password} = req.body;

  const user = userObj.find(u => u.email === email && u.password === password);
 
  if(user){
    userObj[user.userId - 1].token = createToken(email);

    return responseFormatter(res,200,'User is successfully logged in',false,
     {
          userId: user.userId,
          email: user.email,
          token: user.token
      }
    )
  }
  else {
    return responseFormatter(res,401,'Wrong email or password',true);
  }
}

export default login;