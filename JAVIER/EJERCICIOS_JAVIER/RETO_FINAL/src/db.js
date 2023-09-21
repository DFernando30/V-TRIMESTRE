import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb');
        console.log('LA DB ESTÁ CONECTADA');
    } catch (error) {
        console.log(error);
    }
};

