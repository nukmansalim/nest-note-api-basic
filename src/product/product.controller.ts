import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get()
    findAll(): string {
        return "this is findAll method"
    }
    @Get()
    findOne(): string {
        return "this is from findOne method"
    }
    @Post()
    createProduct(): string {
        return "this is from createProduct method"

    }
    @Patch()
    updateProduct(): string {
        return "this is from updateProduct method"
    }
    @Delete()
    deleteProduct(): string {
        return "this is from deleteProduct method"
    }
}
