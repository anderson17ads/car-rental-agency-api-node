import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards';
import { Puplic } from '../common/decorators/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Puplic()
  @Get()
  async getAll(): Promise<UserDocument[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<UserDocument> {
    return this.usersService.getById(id);
  }

  @Get('email/:email')
  async getByEmail(@Param('email') email: string): Promise<UserDocument> {
    return this.usersService.getByEmail(email);
  }

  @Post()
  async create(@Body() user: User): Promise<UserDocument> {
    return this.usersService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<UserDocument> {
    return this.usersService.update(id, user);
  }
}
