import jwt from 'jsonwebtoken';


export default function createToken(email) {
  const token = jwt.sign({email},
    'secret',
    {
      expiresIn: '24h',
    });
  return token;
}
