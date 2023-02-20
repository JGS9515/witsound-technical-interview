import { Request, Response, NextFunction } from 'express';
import { IRepository, UsersRepository } from '../repositories';
import { User } from '../data';
import { validate } from 'class-validator';

export class UsersController {
  private readonly _repository: UsersRepository;

  constructor(repository: IRepository<User>) {
    this._repository = repository;
  }

  public async getAllUsers(request: Request, response: Response, next: NextFunction): Promise<any> {
    return this._repository
      .findAll()
      .then((users) => {
        response.status(200).send(users)
      })
      .catch((error) => {
        return response.status(500).send({ error: error })
      });
  }

  public async addUser(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      let user = new User();
      user.name = request.body.user;
      validate(user).then(errors => {
        if (errors.length > 0) {
          return response.status(500).send({ error: errors })
        } else {
          return this._repository
            .addUser({
              name: request.body.user,
            })
            .then((user) => response.status(200).send(user))
            .catch((error) => response.status(500).send({ error: error }));
        }
      });
    }
    catch (e) {
      throw response.status(500).send(e);
    }
  }
}
