import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "libs/guards/jwt-auth.guard";
import { RegisterDriverDto } from "./dto/register-driver.dto";
import { DriverService } from "./driver-service";

@Controller('drivers')
@UseGuards(JwtAuthGuard)
export class DriverController {
  constructor(private service: DriverService) {}

  @Post('register')
  register(@Req() req, @Body() dto: RegisterDriverDto) {
    return this.service.register(req.user.sub, {
      fullName: dto.fullName,
      phone: dto.phone,
      vehicle: {
        brand: dto.vehicleBrand,
        plate: dto.plate,
        color: dto.color,
      },
    });
  }

  @Post('online')
  online(@Req() req) {
    return this.service.goOnline(req.user.sub);
  }

  @Post('offline')
  offline(@Req() req) {
    return this.service.goOffline(req.user.sub);
  }
}
