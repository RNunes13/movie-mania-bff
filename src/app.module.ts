import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfigModule } from '@modules/config/config.module';
import { HealthModule } from '@modules/health/health.module';
import { MoviesModule } from '@modules/movies/movies.module';
import { GenresModule } from '@modules/genres/genres.module';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [AppConfigModule, HealthModule, MoviesModule, GenresModule],
})
export class AppModule {}
