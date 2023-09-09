import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpModule } from './ip/ip.module';

@Module({
  imports: [IpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
