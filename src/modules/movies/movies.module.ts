import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppConfigModule } from '@modules/config/config.module';
import { ApiModule } from '@modules/api/api.module';

import { MoviesService } from './movies.service';
import { MoviesAdapter } from './movies.adapters';
import { MoviesController } from './movies.controller';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesAdapter],
  imports: [TerminusModule, ApiModule, AppConfigModule],
})
export class MoviesModule {}
