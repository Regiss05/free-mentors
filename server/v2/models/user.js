import createToken from '../helpers/createToken';


export class user {
  constructor(userId, email, firstName, lastName, password, isAdmin, isMentor){
    this.userId = userId,
    this.email = email,
    this.firstName = firstName,
    this.lastName = lastName,
    this.password = password, 
    this.isAdmin = isAdmin,
    this.isMentor = isMentor,
    this.token = createToken(email);
  }
}

const obj = new user(
  1,
  'lenovo@lemoisson.com',
  'lenovo',
  'thinkpad',
  'rec',
)

export const userObj = [obj];
