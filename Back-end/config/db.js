import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://magedkarm341_db_user:aiinvoice@cluster0.p1pdqbb.mongodb.net/InvoiceAI"
    )
    .then(() => {
      console.log("DB connected");
    });
};
