import mongoose from 'mongoose';
const {Schema} = mongoose;

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique:true,
        },

        img: {
            type: String,
            required: true,
        },

        price: {
            type: String,
            required: true,
            unique:true,
        },


        offerPrice: {
            type: String,
            required: true,
        },

        rating: {
            type: String,
        },  
    },
    { timestamps: true }

);

export default mongoose.model ("Product", ProductSchema);
