import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get('')
  getRoot(): string {
    return 'Auth Service is running';
  }
}
