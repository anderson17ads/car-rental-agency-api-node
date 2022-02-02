import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop()
  year: number;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
