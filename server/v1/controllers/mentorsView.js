import {mentorObj} from '../models/mentor';

const mentors = (req, res) => {
  res.status(200).send({
    mentorObj,
  })
}

export default mentors;