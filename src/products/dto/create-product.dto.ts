import {
  IsString,
  IsNumber,
  IsPositive,
  IsArray,
  IsUrl,
  IsIn,
  IsNotEmpty,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsIn(['USD', 'EUR', 'GBP']) // Add supported currencies as needed
  currency: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsIn(['S', 'M', 'L', 'XL']) // Add supported sizes as needed
  size: string;

  @IsString()
  @IsNotEmpty()
  material: string;

  @IsArray()
  @IsUrl({}, { each: true })
  images: string[];
}
