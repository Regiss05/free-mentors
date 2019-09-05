import {mentorObj} from '../models/mentor';

const findMenId = (req, res, next) => {
  const{
    mentorId,
  } = req.params;
  
  let menId = mentorObj.findIndex(m => m.mentorId.toString() === mentorId);
  
  if(menId >= 0){
    return res.status(200).send({
      data:mentorObj[menId],
    })
  }
  next();
}

export default findMenId;