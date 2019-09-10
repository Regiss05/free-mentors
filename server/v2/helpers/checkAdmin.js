import {userObj} from '../models/user';

export default function checkAdmin(req, res, next){
  const {email} = req.decoded;
  const user = userObj.find(u => u.email === email);
  if(user && user.isAdmin) next();
  else res.status(401).send({
    message : 'only the admin can do this'
  })
}