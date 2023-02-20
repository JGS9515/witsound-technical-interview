import { User } from "../data";

export interface IRepository<T> {
  findAll(): Promise<T[]>;
  addUser(user:User): Promise<User>;
}
