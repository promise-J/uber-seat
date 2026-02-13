import { Injectable } from "@nestjs/common";
import { DriverRepository } from "./repositories/driver.repository";

@Injectable()
export class DriverService {
  constructor(private repo: DriverRepository) {}

  register(authId: string, dto: any) {
    return this.repo.create({
      authId,
      ...dto,
      verified: false,
    });
  }

  goOnline(authId: string) {
    return this.repo.updateStatus(authId, 'online');
  }

  goOffline(authId: string) {
    return this.repo.updateStatus(authId, 'offline');
  }

  findAvailableDrivers() {
    return this.repo.findAvailable();
  }
}
