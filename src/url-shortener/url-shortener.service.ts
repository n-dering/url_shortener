import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortenedUrlEntity } from './url-shortener.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlShortenerService {
  constructor(
    @InjectRepository(ShortenedUrlEntity)
    private readonly shortenedUrl: Repository<ShortenedUrlEntity>,
  ) {}

  prepareUrlData = (url: string): Omit<ShortenedUrlEntity, 'id'> => {
    const short_code = url + Math.random().toString(36).substring(7);
    return {
      created_at: new Date(),
      clicks: 0,
      short_code,
      original_url: url,
      is_active: true,
      expires_at: null,
      metadata: null,
      user_id: null,
    };
  };

  async saveUrl(url: string) {
    const data = this.prepareUrlData(url);
    const shortenedUrlEntity = this.shortenedUrl.create(data);
    return await this.shortenedUrl.save(shortenedUrlEntity);
  }
}
