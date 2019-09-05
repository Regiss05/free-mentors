import {userObj} from '../models/user';
import createToken from '../helpers/createToken';

const login = (req, res, next) => {

  const {email, password} = req.body;

  if(email && password){
    const user = userObj.find(u => u.email === email && u.password === password);

    if(user){
      userObj[user.userId - 1].token = createToken(email);
      res.status(200).send({
        message : 'User is successfully logged in',
        user,
      })
    }
    else {
      res.status(401).send({
        message : 'wrong email or password',
     
      })
    }
  } else {
    res.status(400).send({
      message : 'provide all required data',
    })
  }
}

export default login;