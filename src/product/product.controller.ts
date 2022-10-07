import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }
    @Get()
    findAll(): string {
        return "this is findAll method"
    }
    @Get(":id")
    findOne(): string {
        return "this is from findOne method"
    }
    @Post()
    createProduct(): string {
        return "this is from createProduct method"

    }
    @Patch(":id")
    updateProduct(): string {
        return "this is from updateProduct method"
    }
    @Delete(":id")
    deleteProduct(): string {
        return "this is from deleteProduct method"
    }
}
