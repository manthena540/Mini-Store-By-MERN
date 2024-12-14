import mongoose, { Mongoose } from "mongoose";


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type: String,
        required:true
    },
},{
    timestamps:true //createAt, updatedAT
});

const Product = mongoose.model('Product',productSchema)

export default Product;


