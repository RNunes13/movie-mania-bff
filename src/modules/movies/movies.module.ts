import { Module } from '@nestjs/common';
import { AppConfigModule } from '@modules/config/config.module';
import { ApiModule } from '@modules/api/api.module';
import { GenresModule } from '@modules/genres/genres.module';

import { MoviesService } from './movies.service';
import { MoviesAdapter } from './movies.adapters';
import { MoviesController } from './movies.controller';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesAdapter],
  imports: [ApiModule, AppConfigModule, GenresModule],
})
export class MoviesModule {}
