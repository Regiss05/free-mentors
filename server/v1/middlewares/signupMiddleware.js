import {userObj} from '../models/user';

const checkUserExist = (req, res, next) => {
  const {
    email,  
  } = req.body;
    
  //check the mail and the existing one to avoid the conflit
  let myuser = userObj.find(u => u.email === email);
    
  if(myuser){
    return res.status(409).send({
      message: 'mail already used by another person',
    })
  }
  next();   
}

export default checkUserExist;