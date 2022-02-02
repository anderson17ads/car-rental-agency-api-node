import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehicleService } from './vehicles.service';
import { VehicleSchema } from './schemas/vehicle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Vehicle', schema: VehicleSchema }]),
  ],
  controllers: [VehiclesController],
  providers: [VehicleService],
})
export class VehiclesModule {}
