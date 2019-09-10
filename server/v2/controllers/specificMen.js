import {mentorObj} from '../models/mentor';

const findMenId = (req, res, next) => {
  const{
    mentorId,
  } = req.params;
  
  let menId = mentorObj.findIndex(m => m.mentorId.toString() === mentorId);
  
  if(menId < 0){
    res.status(404).send({
      message: 'mentor not found',
    });
  }

  if(menId >= 0){
    return res.send({
      data:mentorObj[menId],
    })
  }
  next();
}

export default findMenId;