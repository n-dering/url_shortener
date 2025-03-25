import { Module } from '@nestjs/common';
import { UrlShortenerController } from './url-shortener.controller';
import { UrlShortenerService } from './url-shortener.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenedUrlEntity } from './url-shortener.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShortenedUrlEntity])],
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService],
})
export class UrlShortenerModule {}
