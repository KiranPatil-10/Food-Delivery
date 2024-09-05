import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mernstack:mernstack123@cluster0.onr0z.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}