import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AppService } from 'src/app.service';
//import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/models/user.model';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private readonly appService: AppService) {}
  @Get()
  //@SkipThrottle({ default: false }) //SkipThrottle,
  // Override default configuration for Rate limiting and duration.
  @Throttle({ default: { limit: 3, ttl: 60000 } })
  //@Roles('admin')
  async getHello(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Post()
  //@Roles('admin')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return createUserDto;
  }
}
