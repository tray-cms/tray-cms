import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {AppModule} from './app.module';
import {TrayOptions} from './TrayOptions';


export async function bootstrap(options: TrayOptions = {}) {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static assets
  if (options.publicPath) {
    app.useStaticAssets(options.publicPath);
  }
  // Start server
  await app.listen(options.port || 80);
}
