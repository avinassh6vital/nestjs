import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { databaseConfig } from './config/database.config';
import { User } from './models/user.model';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
//import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks-service/tasks-service.service';
//import { LoginController } from './login/login.controller';
import { AuthV2Controller } from './auth-v2/auth-v2.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // Conditionally enable MongoDB (Atlas) or PostgreSQL (local) based on DB_TYPE env variable
    ...(process.env.DB_TYPE === 'postgres'
      ? [
          SequelizeModule.forRoot({
            ...databaseConfig,
            models: [User],
          }),
        ]
      : [
          MongooseModule.forRoot(
            'mongodb+srv://avinashkolluru1666_db_user:VXWJy2QSw02Ykg0T@myfirstcluster.d6ixivc.mongodb.net/practice?retryWrites=true&w=majority&appName=myfirstCluster',
          ),
        ]),
    UsersModule,
    AuthModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'short',
          ttl: 1000,
          limit: 3,
        },
        {
          name: 'medium',
          ttl: 10000,
          limit: 20,
        },
        {
          name: 'long',
          ttl: 60000,
          limit: 100,
        },
      ],
    }),
    AuthModule,
    //ScheduleModule.forRoot(),
  ],
  controllers: [AppController, AuthV2Controller],
  providers: [TasksService],
})
export class AppModule {}
