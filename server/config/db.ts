import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.DB_URI as string;

const connectDB = async () => {
    try {
        // Define Mongoose connection options
        const mongooseOptions: mongoose.ConnectOptions = {
            dbName: 'bm-riders',
            // Other options can be added here if needed
        };

        // Connect to MongoDB
        await mongoose.connect(DB_URI, mongooseOptions);
        console.log('MongoDB connected successfully');
    } catch (error) {
        if(error instanceof Error)
            console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
