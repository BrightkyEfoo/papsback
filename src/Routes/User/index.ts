import { Router } from 'express';
import auth from '../../auth/auth';
import { loginUser } from './helpers/LoginHelper';
import { registerUser } from './helpers/RegisterUser';


export const UserRouter = Router();

UserRouter.post('/login',loginUser)
UserRouter.post('/register',registerUser)
UserRouter.use(auth)