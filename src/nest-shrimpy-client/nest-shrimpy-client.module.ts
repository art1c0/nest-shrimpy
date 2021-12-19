import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestShrimpyClientController } from './nest-shrimpy-client.controller';
import { NestShrimpyModule } from '../nest-shrimpy.module';

@Module({
  controllers: [NestShrimpyClientController],
  imports: [
    ConfigModule.forRoot(),

    NestShrimpyModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          privateKey: configService.get('SHRIMPY_PRIVATE_KEY'),
          publicKey: configService.get('SHRIMPY_PUBLIC_KEY'),
          token: configService.get('SHRIMPY_TOKEN'),
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class NestShrimpyClientModule {}
