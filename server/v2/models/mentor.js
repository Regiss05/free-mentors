export class mentor{
  constructor(mentorId, firstName, lastName, email, password, address, bio, occupation, expertise, userId){
    this.mentorId = mentorId,
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.address = address,
    this.bio = bio,
    this.occupation = occupation,
    this.expertise = expertise,
    this.userId = userId
  }

}

const obj = new mentor(
  1,
  'hp',
  'pavillon',
  'men',
  'hppavillon@gmail.com',
  '16gbram',
  'kigali',
  'single',
  'programmer',
  'web',
)

export const mentorObj = [obj];