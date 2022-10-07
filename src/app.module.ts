import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://localhost:300/nest-api-basic')],

})
export class AppModule { }
