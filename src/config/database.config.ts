import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
// import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig: SequelizeModuleOptions = {
	dialect: 'postgres' as Dialect,
	host: process.env.DB_HOST || 'localhost',
	port: Number(process.env.DB_PORT ?? 5432),
	username: process.env.DB_USERNAME || 'postgres',
	password: process.env.DB_PASSWORD || '12345', //[password]
	database: process.env.DB_NAME || 'postgres',
	autoLoadModels: true,
	synchronize: true, // Set to false in production
	logging: true,
	models: [], // Placeholder, will be set in app.module.ts
};
//mongodb+srv://avinashkolluru1666_db_user:VXWJy2QSw02Ykg0T@myfirstcluster.d6ixivc.mongodb.net/?appName=myfirstCluster

//avinashkolluru1666_db_user
//VXWJy2QSw02Ykg0T