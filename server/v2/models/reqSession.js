export class session{
  constructor(sessionId, mentorId, menteeId, questions, menteeEMail, status){
    this.sessionId = sessionId,
    this.mentorId = mentorId,
    this.menteeId = menteeId,
    this.questions = questions,
    this.menteeEMail = menteeEMail,
    this.status = status
  }
}

const obj = new session(
  1, 
  1,
  1,
  'Request has been sent',
  'req@gmail.com',
  'good',
)

export const sessionObj = [obj];