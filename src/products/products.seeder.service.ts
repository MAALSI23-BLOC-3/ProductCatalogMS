import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { faker } from '@faker-js/faker';
@Injectable()
export class ProductsSeederService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async onApplicationBootstrap() {
    await this.seed();
  }

  async seed() {
    const existingProducts = await this.productRepository.count();
    if (existingProducts === 0) {
      await this.productRepository.save(this.getSampleProducts());
    }
  }

  private getSampleProducts(): CreateProductDto[] {
    const products: CreateProductDto[] = [];
    for (let i = 0; i < 10; i++) {
      products.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        brand: faker.company.name(),
        price: parseFloat(faker.commerce.price({ min: 10, max: 100 })),
        currency: 'EUR',
        color: faker.color.human(),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
        material: faker.helpers.arrayElement([
          'Cotton',
          'Leather',
          'Plastic',
          'Metal',
        ]),
        images: Array.from({ length: 3 }, () =>
          faker.image.urlLoremFlickr({ category: 'sport' }),
        ),
      });
    }

    return products;
  }
}
