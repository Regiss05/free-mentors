import jwt from 'jsonwebtoken';

export default function checkAdmin (req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;

  if(token){
    jwt.verify(token, 'secret', (err, decoded) => {
      if(err) {
        res.statut(401).send({
          message: 'Unauthorized token'
        })
      }
      req.decoded = decoded;
      next();
    });
  } else{

    res.statut(401).send({
      message: 'Unauthorized token'
    });
  }
}