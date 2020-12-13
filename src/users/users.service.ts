import { Injectable } from '@nestjs/common'
import { User, UserDocument } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id)
  }

  async getByEmail({ email, password }): Promise<User> {
    return this.userModel.findOne({ email, password })
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newProduct = new this.userModel(userDto)
    return newProduct.save()
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id)
  }

  async update(id: string, userDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true })
  }
}
