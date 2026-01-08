# PostgreSQL Sequelize Setup

## Installation Complete ✓

The following packages have been installed:
- @nestjs/sequelize
- @nestjs/config
- sequelize
- sequelize-typescript
- pg
- pg-hstore

## Configuration Files Created

1. **Database Config** - [src/config/database.config.ts](src/config/database.config.ts)
2. **User Model** - [src/models/user.model.ts](src/models/user.model.ts)
3. **Environment Files** - `.env` and `.env.example`

## Database Configuration

Update your `.env` file with your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=nestjs_db
```

## Prerequisites

Make sure PostgreSQL is installed and running on your system:

### macOS (using Homebrew):
```bash
brew install postgresql@15
brew services start postgresql@15
```

### Create Database:
```bash
psql -U postgres
CREATE DATABASE nestjs_db;
```

## Next Steps

1. **Start PostgreSQL** if not already running
2. **Create the database** using the psql command above
3. **Run the application**: `npm run start:dev`
4. The tables will be auto-created based on your models (synchronize: true)

## Usage Example

The User model is already set up and injected. You can use it in your services:

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(name: string, email: string, age?: number): Promise<User> {
    return this.userModel.create({ name, email, age });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
```

## Important Notes

- `synchronize: true` is set in development for auto-table creation
- Set `synchronize: false` in production and use migrations
- Add `.env` to your `.gitignore` file to keep credentials secure
