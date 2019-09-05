import {mentorObj} from '../models/mentor';

const mentors = (req, res) => {
  res.status(200).send({
    message: 'You can view all mentors',
    mentors:mentorObj
  })
}

export default mentors;