import {userObj, user} from '../models/user';

const signup = (req, res) => {
  const {
    firstName, 
    lastName, 
    email,  
    password, 
    confPassword
  } = req.body;
  
  const myuser = new user(
    userObj.length, 
    email,
    firstName,
    lastName,
    password,
    confPassword,
  );

  userObj.push( myuser);
  if(myuser){
    res.status(201).send({
      message: 'User created successfully',
      data: {
        userId: myuser.userId,
        email: myuser.email,
        token: myuser.token
      }
    })
  }else{
    res.status(409).send({
      message:'not created',
    })
  }
}
export default signup;