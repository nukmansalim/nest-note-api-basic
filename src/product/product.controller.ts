import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }
    @Get()
    findAll() {
        return this.productService.findAll()
    }
    @Get(":id")
    findOne(@Param() params) {
        return this.productService.findOne(params)
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
