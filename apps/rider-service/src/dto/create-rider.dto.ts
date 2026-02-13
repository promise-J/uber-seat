import { IsString } from 'class-validator';

export class CreateRiderDto {
  @IsString()
  fullName: string;

  @IsString()
  phone: string;
}
