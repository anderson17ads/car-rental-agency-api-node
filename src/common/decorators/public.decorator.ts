import { SetMetadata, CustomDecorator } from '@nestjs/common';

export const Puplic = (): CustomDecorator => SetMetadata('isPublic', true);
