import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly usersModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<UserDocument[]> {
    return await this.usersModel.find().exec();
  }

  async getById(id: string): Promise<UserDocument> {
    return await this.usersModel.findById(id).exec();
  }

  async getByEmail(email: string): Promise<UserDocument> {
    return await this.usersModel.findOne({ email }).exec();
  }

  async create(user: User): Promise<UserDocument> {
    const createUser = new this.usersModel(user);
    return await createUser.save();
  }

  async update(id: string, user: User): Promise<UserDocument> {
    await this.usersModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }
}
