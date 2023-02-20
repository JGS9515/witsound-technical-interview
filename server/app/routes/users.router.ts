import express, { Request, Response, Router, NextFunction, request, response } from 'express';
import { UsersController } from '../controllers';
import { IRepository, UsersRepository } from '../repositories';
import { User } from '../data';

const router: Router = express.Router();
const usersRepository: IRepository<User> = new UsersRepository();
const controller: UsersController = new UsersController(usersRepository);
router.get('/name', async (request: Request, response: Response, next: NextFunction) => {
  await controller.getAllUsers(request, response, next);
});
router.post('/name', async (request: Request, response: Response, next: NextFunction) => {
  await controller.addUser(request, response, next);
});

export const usersRouter  = router;