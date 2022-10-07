import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    price: number

    @Prop()
    description: string

}

export const productSchema = SchemaFactory.createForClass(Product)
