import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from 'src/app.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { User } from 'src/models/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [AppService, RolesGuard, UsersService],
})
export class UsersModule {}
