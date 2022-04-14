import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { AppConfigModule } from '@modules/config/config.module';

import { HealthService } from './health.service';
import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule, HttpModule, AppConfigModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
