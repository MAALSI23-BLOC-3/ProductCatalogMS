import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../../utils/entities/default.entity';

@Entity('products')
export class Product extends DefaultEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  brand: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  currency: string;

  @Column()
  color: string;

  @Column()
  size: string;

  @Column()
  material: string;

  @Column('simple-array')
  images: string[];
}
