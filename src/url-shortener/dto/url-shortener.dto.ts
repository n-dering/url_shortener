import { IsUrl } from 'class-validator';

export class UrlShortenerDto {
  @IsUrl()
  url: string;
}
