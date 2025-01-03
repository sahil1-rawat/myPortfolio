import express from 'express';
import sendEmailController from '../controller/portfolioController.js';

const portfolioRouter = express.Router();

portfolioRouter.post('/msg', sendEmailController);
export default portfolioRouter;
