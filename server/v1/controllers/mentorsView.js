import {mentorObj} from '../models/mentor';

const mentors = (req, res) => {
  const ments=[];
  mentorObj.forEach(element => {
    ments.push({
      menId: element.mentorId,
      mentFN: element.firstName,
      menLN: element.lastName,
      menMail: element.email,
      menAddress: element.address,
      menBio : element.bio,
      menOcc : element.occupation,
      menExpe: element.expertise
    })
  })
  res.status(200).send({
    message: 'You can view all mentors',
    data:ments
  })
}

export default mentors;