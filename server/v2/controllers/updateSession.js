import {sessionObj} from '../models/reqSession';
import responseFormatter from '../helpers/responseFormatter';
import { Session } from 'inspector';

function updateSession(req, res, state){
  const {sessionId} = req.params;
  const session = sessionObj.findIndex(s => s.sessionId.toString() === sessionId);
  if(session > -1){
    sessionObj[session].status = state;

    return responseFormatter(res,200,'session accepted',false,
    {
      mysession: sessionObj[Session]
    }  
    
    );
  } else {
    return responseFormatter(res,404,'session error',true);
  }
    
}

export function acceptSession(req, res){
  updateSession(req, res, 'accepted');
}
export function rejectSession(req, res){
  updateSession(req, res, 'rejected');
}
