import {userObj, user} from '../models/user';
import responseFormatter from "../helpers/responseFormatter";

const signup = (req, res) => {
  const {
    firstName, 
    lastName, 
    email,  
    password, 
  } = req.body;
  

  const myuser = new user(
    userObj.length, 
    email,
    firstName,
    lastName,
    password,
  );

  userObj.push( myuser);
  if(myuser){
    return responseFormatter(res,201,'User created',myuser,false);
  }else{
    return responseFormatter(res,409,'User not created',data,true)
  }
}
export default signup;