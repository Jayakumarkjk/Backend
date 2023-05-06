import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";




const app = express();
dotenv.config();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Hi");
});

// app.get("/product", (req, res) => {
//     res.send(products);
// });

// app.get("/product:id", (req, res) => {
//   res.send(products);
// });


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to MongoDB")
  } catch (error){
      throw error;
 }
};

mongoose.connection.on("disconnected", ()=> {
  console.log("MongoDB disconnected")
});


app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);








app.listen(PORT, () => {
  connect()
  console.log("Backend server started on PORT");
});