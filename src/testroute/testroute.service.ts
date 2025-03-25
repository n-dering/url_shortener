import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-testroute.dto';
// import { UpdateUserDto } from './dto/update-testroute.dto';
import { User } from './entities/testroute.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';

@Injectable()
export class TestrouteService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // Create a new user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Find a user by ID
  // async findOne(id: number): Promise<User> {
  //   const user = await this.userRepository.findOne(id);
  //   if (!user) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return user;
  // }

  // Update a user by ID
  // async update(id: number, updateUserDto: any): Promise<User> {
  //   await this.userRepository.update(id, updateUserDto);
  //   const updatedUser = await this.userRepository.findOne(id);
  //   if (!updatedUser) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return updatedUser;
  // }

  // Remove a user by ID
  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  // Find users by age range and calculate average age
  async findUsersByAgeRange(
    minAge: number,
    maxAge: number,
  ): Promise<{ users: User[]; averageAge: number }> {
    const users = await this.userRepository.find({
      where: {
        age: Between(minAge, maxAge),
      },
    });

    if (users.length === 0) {
      throw new NotFoundException(
        `No users found between ages ${minAge} and ${maxAge}`,
      );
    }

    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    const averageAge = totalAge / users.length;

    return { users, averageAge };
  }
}
