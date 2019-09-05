import {sessionObj} from '../models/reqSession';

function updateSession(req, res, state){
  const {sessionId} = req.params;
  const session = sessionObj.findIndex(s => s.sessionId.toString() === sessionId);
  if(session > -1){
    sessionObj[session].status = state;
    res.status(200).send({
      mySession: sessionObj[session],
    });
  } else {
    res.status(404).send({
      message: 'Session error',
    });
  }
    
}

export function acceptSession(req, res){
  updateSession(req, res, 'accepted');
}
export function rejectSession(req, res){
  updateSession(req, res, 'rejected');
}
