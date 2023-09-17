import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {

    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected')
        return;
    }

    try {
        await mongoose.connect(String(process.env.MONGODB_URI), {
            dbName: "robotz",
        });
        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.error(error);
    }

}
