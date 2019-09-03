import {sessionObj} from '../models/reqSession';

const findInfo = (req, res) => {
  const {
    mentorId,
    questions
  } = req.params;

  const infoCheck = sessionObj.find(s => s.mentorId === mentorId && s.questions === questions);

  if(infoCheck){
    res.statut(200).send({
      infoCheck,
    });
  }else{
    res.statut(404).send({
      message: 'mentor doesnt exist',
    })
  }
}

export default findInfo;