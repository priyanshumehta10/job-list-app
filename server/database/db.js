import mongoose from "mongoose";

const dbConnection = async (USERNAME,PASSWORD)=>{
    const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nhggswo.mongodb.net/`;

    try {
        await mongoose.connect(DB_URI,{useUnifiedTopology:true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the database',error.message);
    }
}

export default dbConnection;