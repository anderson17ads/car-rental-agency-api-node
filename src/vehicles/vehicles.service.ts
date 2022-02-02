import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle, VehicleDocument } from './schemas/vehicle.schema';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name)
    private readonly vehicleModel: Model<VehicleDocument>,
  ) {}

  async getAll(): Promise<Vehicle[]> {
    return await this.vehicleModel.find().exec();
  }

  async getById(id: string): Promise<Vehicle | boolean> {
    const vehicle = await this.vehicleModel.findById(id).exec();

    if (!vehicle) return false;

    return vehicle;
  }

  async create(vehicle: Vehicle): Promise<Vehicle> {
    const createVehicle = new this.vehicleModel(vehicle);
    return await createVehicle.save();
  }

  async update(id: string, vehicle: Vehicle): Promise<Vehicle | boolean> {
    await this.vehicleModel.updateOne({ _id: id }, vehicle).exec();
    return this.getById(id);
  }

  async delete(id: string): Promise<boolean> {
    const hasDelete = await this.vehicleModel.deleteOne({ _id: id }).exec();

    if (hasDelete.deletedCount === 0) return false;

    return true;
  }
}
