import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    return `response ${id}`;
  }
}
