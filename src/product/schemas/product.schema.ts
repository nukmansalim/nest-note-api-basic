import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "../../user/schemas/user.schema";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    price: number

    @Prop()
    description: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User", default: null })
    seller: User

}

export const productSchema = SchemaFactory.createForClass(Product)
