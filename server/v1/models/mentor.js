export class mentor{
  constructor(mentorId, firstName, lastName, email, password, address, bio, occupation, expertise){
    this.mentorId = mentorId,
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.address = address,
    this.bio = bio,
    this.occupation = occupation,
    this.expertise = expertise
  }

}

const obj = new mentor(
  1,
  'hp',
  'pavillon',
  'hppavillon@gmail.com',
  '16gbram',
  'kigali',
  'single',
  'programmer',
  'web',
)

export const mentorObj = [obj];