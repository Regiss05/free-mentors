import userLoginAuth from '../controllers/userLoginAuth';
import userSignupAuth from '../controllers/userSignupAuth';
import signupMiddleware from '../middlewares/signupMiddleware';
import mentorsView from '../controllers/mentorsView';
import express from 'express';
import specifMentor from '../controllers/specificMen';
import findUserId from '../controllers/adminChange';
import findInfo from '../controllers/sessionRequest';
import decodeToken from '../middlewares/decodeToken';
import {acceptSession,rejectSession} from '../controllers/updateSession';
import {validateEmail, validateAll} from '../middlewares/validator';

const router = express.Router();

router.post('/signin', userLoginAuth);
router.post('/signup', validateEmail, validateAll, signupMiddleware, userSignupAuth);
router.get('/mentors', mentorsView);
router.get('/specMentor/:mentorId',specifMentor);
router.patch('/adminChange/:userId',decodeToken, findUserId);
router.post('/session', decodeToken, findInfo);
router.patch('/sessions/:sessionId/accept', decodeToken, acceptSession);
router.patch('/sessions/:sessionId/reject', decodeToken, rejectSession);

export default router;
