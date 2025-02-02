import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { ProductsSeederModule } from './products/products.seeder.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('POSTGRES_HOST'),
          port: configService.get('DATABASE_PORT'),
          database: configService.get('POSTGRES_DB'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          entities: [Product],
          autoLoadEntities: true,
          keepConnectionAlive: false,
          synchronize: configService.get('NODE_ENV') === 'dev',
          logging: configService.get('NODE_ENV') === 'dev',
        };
      },
    }),
    ProductsModule,
    ProductsSeederModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
