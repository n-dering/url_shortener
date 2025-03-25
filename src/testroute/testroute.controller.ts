import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TestrouteService } from './testroute.service';
import { CreateUserDto } from './dto/create-testroute.dto';
// import { UpdateUserDto } from './dto/update-testroute.dto';
import { User } from './entities/testroute.entity';

@Controller('users')
export class TestrouteController {
  constructor(private readonly testrouteService: TestrouteService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.testrouteService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.testrouteService.findAll();
  }

  // // Get a user by ID
  // @Get(':id')
  // async findOne(@Param('id') id: number): Promise<User> {
  //   return this.testrouteService.findOne(id);
  // }

  // Update a user by ID
  // @Put(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<User> {
  //   return this.testrouteService.update(id, updateUserDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.testrouteService.remove(id);
  }

  @Get('age-range')
  async findUsersByAgeRange(
    @Query('minAge') minAge: number,
    @Query('maxAge') maxAge: number,
  ): Promise<{ users: User[]; averageAge: number }> {
    return this.testrouteService.findUsersByAgeRange(minAge, maxAge);
  }
}
