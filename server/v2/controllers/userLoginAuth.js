import {userObj} from '../models/user';
import createToken from '../helpers/createToken';

const login = (req, res, next) => {

  const {email, password} = req.body;

  const user = userObj.find(u => u.email === email && u.password === password);

  if(user){
    userObj[user.userId - 1].token = createToken(email);
    res.status(200).send({
      message : 'User is successfully logged in',
      data: {
        userId: user.userId,
        email: user.email,
        token: user.token
      }
    });
  }
  else {
    res.status(401).send({
      message : 'wrong email or password',
     
    })
  }
}

export default login;