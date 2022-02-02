import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Vehicle } from './schemas/vehicle.schema';
import { VehicleService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async getAll(): Promise<Vehicle[]> {
    return this.vehicleService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Vehicle | boolean> {
    return this.vehicleService.getById(id);
  }

  @Post()
  async create(@Body() vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleService.create(vehicle);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() vehicle: Vehicle,
  ): Promise<Vehicle | boolean> {
    return this.vehicleService.update(id, vehicle);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.vehicleService.delete(id);
  }
}
