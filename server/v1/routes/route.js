import userLoginAuth from '../controllers/userLoginAuth';
import userSignupAuth from '../controllers/userSignupAuth';
import signupMiddleware from '../middlewares/signupMiddleware';
import mentorsView from '../controllers/mentorsView';
import express from 'express';
import specifMentor from '../controllers/specificMen';
import findUserId from '../controllers/adminChange';
import findInfo from '../controllers/sessionRequest';

const router = express.Router();

router.post('/signin', userLoginAuth);
router.post('/signup', signupMiddleware, userSignupAuth);
router.get('/mentors', mentorsView);
router.get('/specMentor/:mentorId', specifMentor);
router.patch('/adminChange/:userId', findUserId);
router.post('/session/::mentorId', specifMentor, findInfo);

export default router;