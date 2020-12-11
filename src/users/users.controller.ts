import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './schemas/user.schema'
import { CreateUserDto } from './dto/create-user.dto'
import { Product } from '../products/schemas/product.schema'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.createUser(user)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto)
  }
}
