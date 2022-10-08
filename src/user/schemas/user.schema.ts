import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Product } from "../../product/schemas/product.schema";
export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({ required: true })
    name: string

    @Prop({ required: true, select: false })
    password: string

    @Prop({ required: true, unique: true })
    email: string

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }])
    products: Product[]
}

export const UserSchema = SchemaFactory.createForClass(User)
