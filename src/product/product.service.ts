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
    async createProduct(body: createProductDto): Promise<Product> {
        const newProduct = await this.productModel.create({ title: body.title, price: body.price, description: body.description })
        return newProduct
    }
    async updateProduct(id: string, body: createProductDto) {
        const updated = await this.productModel.updateOne({ id }, {
            title: body.title,
            price: body.price,
            description: body.description
        })
        return updated
    }
    async deleteProduct() { }

}
