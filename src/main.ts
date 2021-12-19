/**
 *  If you're building a standalone npm package hosting a dynamic module, you
 *  should delete this file.  Its only purpose is to bootstrap the app so that
 *  you can run the quick verification test (see nest-shrimpy-client/nest-shrimpy-client.module.ts)
 */
import { NestFactory } from '@nestjs/core';
import { NestShrimpyClientModule } from './nest-shrimpy-client/nest-shrimpy-client.module';

async function bootstrap() {
  const app = await NestFactory.create(NestShrimpyClientModule);
  await app.listen(3000);
}
bootstrap();
