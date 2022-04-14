import { HttpException, Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { AppConfigService } from '@modules/config/config.service';
import { ApiOptions } from './api.interface';

@Injectable()
export class ApiService {
  protected instance: AxiosInstance;

  constructor(
    @Inject(AppConfigService)
    private configService: AppConfigService,
  ) {
    this.instance = axios.create({
      baseURL: this.configService.get('services.tmdb.url'),
      params: {
        api_key: this.configService.get('services.tmdb.apiKey'),
      },
    });
  }

  private handleException(error: any): HttpException {
    if (error.response && typeof error.response === 'object') {
      // Request made and server responded
      if (error.response.data) {
        return new HttpException(error.response.data, error.response.status);
      } else if (error.response.statusText) {
        return new HttpException(
          error.response.statusText,
          error.response.status,
        );
      } else {
        return new HttpException(error.response, error.status);
      }
    } else {
      // The request was made but no response was received
      return new HttpException(error.message, 500);
    }
  }

  async get(path: string, options?: ApiOptions) {
    try {
      const { data } = await this.instance.get(path, options);
      return data;
    } catch (error) {
      throw this.handleException(error);
    }
  }
}
