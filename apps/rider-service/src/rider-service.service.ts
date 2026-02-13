import { Injectable } from "@nestjs/common";
import { RiderRepository } from "./repositories/rider.repository";

@Injectable()
export class RiderService {
  constructor(private repo: RiderRepository) {}

  createProfile(authId: string, dto: any) {
    return this.repo.create({ authId, ...dto });
  }

  getProfile(authId: string) {
    return this.repo.findByAuthId(authId);
  }
}
