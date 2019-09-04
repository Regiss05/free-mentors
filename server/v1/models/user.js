
export class user {
  constructor(userId, email, firstName, lastName, password, isAdmin){
    this.userId = userId,
    this.email = email,
    this.firstName = firstName,
    this.lastName = lastName,
    this.password = password, 
    this.isAdmin = isAdmin,
    this.confPassowrd = this.confPassowrd
  }
}

const obj = new user(
  1,
  'lenovo@lemoisson.com',
  'lenovo',
  'thinkpad',
  'rec',
  'rec',
)

export const userObj = [obj];
