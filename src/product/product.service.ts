import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { createProductDto } from './dto/product.dto';
@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec()
    }
    async findOne(id: string): Promise<Product> {
        return this.productModel.findOne({ id })
    }
    async createProduct(body: createProductDto) {
        return console.log(body)
    }
    async updateProduct() { }
    async deleteProduct() { }

}
