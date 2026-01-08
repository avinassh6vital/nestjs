import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createHello(): string {
    return 'Hello Created!';
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
