import {userObj, user} from '../models/user';

const signup = (req, res) => {
  const {
    firstName, 
    lastName, 
    email,  
    password, 
    confPassword
  } = req.body;

  //check the mail and the existing one to avoid the conflit
  
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
      myuser,
    })
  }else{
    res.send({
      message:'not created',
    })
  }
}
export default signup;