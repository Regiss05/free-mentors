import {userObj} from '../models/user';

const login = (req, res) => {

  const {email, password} = req.body;
  //compare email and password from the data base
  const user = userObj.find(u => u.email === email && u.password === password);

  if(user){
    res.status(200).send({
      message : 'User is successfully logged in',
      user,
    })
  } else {
    res.status(401).send({
      message : 'wrong email or password',
     
    })
  }
}

export default login;