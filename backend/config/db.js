import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://greatstack:29092005@cluster0.jdmop.mongodb.net/FOOD_DILIVERY').then(()=>console.log("DB connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.