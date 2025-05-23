import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abhishek10:root@cluster0.c4yytwz.mongodb.net/bhojan"
    )
    .then(() => console.log("DB Connected"));
};
