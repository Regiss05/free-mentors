import {mentorObj} from '../models/mentor';
import responseFormatter from '../helpers/responseFormatter';

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
  responseFormatter(res,200,'all mentors',{data:ments},false);
}

export default mentors;