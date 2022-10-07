import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { Product, productSchema } from './schemas/product.schema';
import { ProductService } from './product.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: productSchema }])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
