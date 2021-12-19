import { Controller, Get } from '@nestjs/common';
import { NestShrimpyService } from '../nest-shrimpy.service';
import { ShrimpyApiClient } from 'shrimpy-node';

@Controller()
export class NestShrimpyClientController {
  constructor(private readonly nestShrimpyService: NestShrimpyService) {}

  @Get()
  async index() {
    const client: ShrimpyApiClient =
      this.nestShrimpyService.getShrimpyApiClient();
    return client.getStatus();
  }
}
