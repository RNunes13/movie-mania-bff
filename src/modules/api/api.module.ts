import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { AppConfigModule } from '@modules/config/config.module';

@Module({
  imports: [AppConfigModule],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}
