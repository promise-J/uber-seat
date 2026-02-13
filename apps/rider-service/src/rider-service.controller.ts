import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { CreateRiderDto } from "./dto/create-rider.dto";
import { RiderService } from "./rider-service.service";
import { JwtAuthGuard } from "libs/guards/jwt-auth.guard";

@Controller('riders')
@UseGuards(JwtAuthGuard)
export class RiderController {
  constructor(private service: RiderService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateRiderDto) {
    return this.service.createProfile(req.user.sub, dto);
  }

  @Get('me')
  me(@Req() req) {
    return this.service.getProfile(req.user.sub);
  }
}
