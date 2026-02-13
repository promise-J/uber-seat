import { Body, Controller, Param, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "libs/guards/jwt-auth.guard";
import { TripService } from "./trip.service";

@Controller('trips')
@UseGuards(JwtAuthGuard)
export class TripController {
  constructor(private service: TripService) {}

  @Post()
  request(@Req() req, @Body() dto: any) {
    return this.service.requestRide(req.user.sub, dto);
  }

  @Post(':id/start')
  start(@Param('id') id: string) {
    return this.service.start(id);
  }

  @Post(':id/complete')
  complete(@Param('id') id: string) {
    return this.service.complete(id);
  }
}
