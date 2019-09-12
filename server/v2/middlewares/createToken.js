import jwt from 'jsonwebtoken';


export default function createToken(email, isAdmin) {
  const token = jwt.sign({email, isAdmin},
    'secret',
    {
      expiresIn: '24h',
    });
    console.log(token);
  return token;
}