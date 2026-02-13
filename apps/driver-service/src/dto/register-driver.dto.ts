import { IsString } from 'class-validator';

export class RegisterDriverDto {
  @IsString()
  fullName: string;

  @IsString()
  phone: string;

  @IsString()
  vehicleBrand: string;

  @IsString()
  plate: string;

  @IsString()
  color: string;
}
