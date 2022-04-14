import { Inject } from '@nestjs/common';
import { AppConfigService } from '@modules/config/config.service';
import { HttpHealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';

export class HealthService {
  constructor(
    @Inject(AppConfigService)
    private configService: AppConfigService,
    private http: HttpHealthIndicator,
  ) {}

  isHealthy(): Promise<HealthIndicatorResult> {
    const url = this.configService.get('services.tmdb.url');
    const apikey = this.configService.get('services.tmdb.apiKey');

    return this.http.pingCheck('api', `${url}/movie/550?api_key=${apikey}`);
  }
}
