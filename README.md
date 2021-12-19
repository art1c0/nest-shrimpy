<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">Nest-Shrimpy – NestJS wrapper for Shrimpy</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
  <a href="https://github.com/nestjsplus/dyn-schematics" target="_blank">
    <img src="https://img.shields.io/badge/Built%20with-%40nestjsplus%2Fdyn--schematics-brightgreen" alt="Built with @nestjsplus/dyn-schematics">
  </a>
</div>

This dynamic module was generated with [Nest Dynamic Package Generator Schematics](https://github.com/nestjsplus/dyn-schematics).  You can read more about using the generator [here](https://github.com/nestjsplus/dyn-schematics).

### Installation

To install this generated project:

```bash
npm install nest-shrimpy --save
```

(or yarn equivalent)

### Test

You can test this module against your Shrimpy keys (set in the .env file)

```bash
cd ./node_modules/nest-vault
npm run start:dev
```

Then connect to [http://localhost:3000](http://localhost:3000) and you should see the status of your Shrimpy client.

### Usage

```javascript
@Module({
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
```

Look at `src/nest-shrimpy-client` for more details.

This wrapper is using [shrimpy-node](https://www.npmjs.com/package/shrimpy-node) module, so take a look how to use it.

```javascript
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
```

Good luck!
