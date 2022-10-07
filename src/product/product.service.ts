import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec()
    }
    async findOne() { }
    async createProduct() { }
    async updateProduct() { }
    async deleteProduct() { }

}
