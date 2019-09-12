import jwt from 'jsonwebtoken';
import responseFormatter from '../helpers/responseFormatter';

export default function checkAdmin (req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;

  if(token){
    jwt.verify(token, 'secret', (err, decoded) => {
      if(err) {
        return responseFormatter(res,401,'Unauthorized token', undefined,true)
      }
      console.log(decoded);
      req.decoded = decoded; 
      next();
    });
  } else{
    return responseFormatter(res,401,'Unauthorized token', undefined,true)
  }
}