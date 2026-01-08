import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}
  @Get()
  async getHello(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return createUserDto;
  }
}
