import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { IpService } from './ip/ip.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ipService: IpService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('ip')
  getIp() {
    return this.ipService.getIp();
  }
}
