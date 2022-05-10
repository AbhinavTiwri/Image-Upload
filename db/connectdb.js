// const mongoose = require('mongoose')
import mongoose from 'mongoose';

const connectDB = async (DATABASE_URI) =>{
    
    try{
        const DB_Option = {
            dbName: 'Product',
        };

        await mongoose.connect(DATABASE_URI, DB_Option);
        console.log("Connectd Sucessfully!!");
    }
    catch(err){
        console.log(err);
    }
};

export default connectDB