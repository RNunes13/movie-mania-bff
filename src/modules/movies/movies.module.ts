import { Module } from '@nestjs/common';
import { AppConfigModule } from '@modules/config/config.module';
import { ApiModule } from '@modules/api/api.module';

import { MoviesService } from './movies.service';
import { MoviesAdapter } from './movies.adapters';
import { MoviesController } from './movies.controller';

@Module({
  controllers: [MoviesController],
  imports: [ApiModule, AppConfigModule],
  providers: [MoviesService, MoviesAdapter],
})
export class MoviesModule {}
