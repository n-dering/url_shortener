import { Body, Controller, Post } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { UrlShortenerDto } from './dto/url-shortener.dto';

@Controller('url-shortener')
export class UrlShortenerController {
  constructor(private urlShortenerService: UrlShortenerService) {}
  // @Get()
  // get(@Body() shortenedURL: UrlShortenerDto) {
  //   return this.urlShortenerService(shortenedURL.url);
  // }

  @Post()
  create(@Body() url: UrlShortenerDto) {
    console.log('POST');
    console.log(url);
    return this.urlShortenerService.saveUrl('https://www.google.com');
  }
}
