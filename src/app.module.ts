import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HealthModule } from '@modules/health/health.module';
import { MoviesModule } from '@modules/movies/movies.module';
import { AppConfigModule } from '@modules/config/config.module';

@Module({
  imports: [AppConfigModule, HealthModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
