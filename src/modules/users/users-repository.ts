import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

export abstract class UsersRepository {
  abstract create(createUserDto: CreateUserDto): Promise<void>;
  abstract findMany(): Promise<User[]>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findById(id: string): Promise<User>;
}
