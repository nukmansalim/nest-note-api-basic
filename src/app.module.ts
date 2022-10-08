import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://localhost:27017/nest-api-basic'), UserModule],

})
export class AppModule { }
