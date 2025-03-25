import { Module } from '@nestjs/common';
import { TestrouteService } from './testroute.service';
import { TestrouteController } from './testroute.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/testroute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TestrouteController],
  providers: [TestrouteService],
})
export class TestrouteModule {}
