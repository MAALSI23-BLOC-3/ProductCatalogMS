import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsSeederService } from './products.seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsSeederService],
  exports: [ProductsSeederService],
})
export class ProductsSeederModule {}
