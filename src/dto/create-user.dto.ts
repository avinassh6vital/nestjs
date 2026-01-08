import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(20)
  username: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(13)
  age: number;

  @IsOptional()
  @IsString()
  bio?: string;
}
