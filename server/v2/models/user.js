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

  toJSON() {

    const obj = {
      userId: this.userId,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      isAdmin: this.isAdmin,
      isMentor: this.isMentor,
      token: this.createToken(email)
    };

    return obj;
  }
}

const admin = new user(0, 'regiss@gmail.com', 'regiss', 'mukub', true, false);
const userNormal = new user(0, 'mat@gmail.com', 'rog', 'tresor', false, false);
const mentor = new user(0, 'grace@gmail.com', 'gace', 'kando', false, true);


export const users = [admin, userNormal, mentor];
