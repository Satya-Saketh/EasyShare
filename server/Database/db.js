import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const DBconnection = async ()=>{
    const url = process.env.MONGO_URL;

    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB")
        
    } catch (error) {

        console.log("Error While Connecting to DB", error);
        
    }

}

export default DBconnection;