import { Module } from '@nestjs/common';
import { AppConfigModule } from '@modules/config/config.module';
import { ApiModule } from '@modules/api/api.module';

import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';

@Module({
  providers: [GenresService],
  controllers: [GenresController],
  imports: [ApiModule, AppConfigModule],
})
export class GenresModule {}
