import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import ContentController from './app/controllers/ContentController';
import CuriosityController from './app/controllers/CuriosityController';
import InterestContoller from './app/controllers/InterestContoller';
import PermissionController from './app/controllers/PermissionController';
import SurveyController from './app/controllers/SurveyController';
import TopicController from './app/controllers/TopicController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';

import validateSessionStore from './app/validators/SessionStore';

const routes = new Router();

routes.post('/users', validateUserStore, UserController.store);
routes.post('/sessions', validateSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', validateUserUpdate, UserController.update);

routes.get('/content', ContentController.index);
routes.post('/content', ContentController.store);

routes.get('/curiosity', CuriosityController.index);
routes.post('/curiosity', CuriosityController.store);

routes.get('/interest', InterestContoller.index);
routes.post('/interest', InterestContoller.store);

routes.get('/permission', PermissionController.index);
routes.post('/permission', PermissionController.store);

routes.get('/survey', SurveyController.index);
routes.post('/survey', SurveyController.store);

routes.get('/topic', TopicController.index);
routes.post('/topic', TopicController.store);

routes.post('/topic/:topicId/interest/', InterestContoller.store);

export default routes;
