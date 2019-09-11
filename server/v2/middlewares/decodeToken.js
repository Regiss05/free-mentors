import jwt from 'jsonwebtoken';

export default function checkAdmin (req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;

  if(token){
    jwt.verify(token, 'secret', (err, decoded) => {
      if(err) {
        return responseFormatter(res,401,'Unauthorized token', data,true)
      }
      req.decoded = decoded;
      next();
    });
  } else{
    return responseFormatter(res,401,'Unauthorized token', data,true)
  }
}