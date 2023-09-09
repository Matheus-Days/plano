import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import { IpService } from './ip.service';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5
  })],
  providers: [IpService],
  exports: [IpService]
})
export class IpModule {}
