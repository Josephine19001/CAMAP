import express from "express";
import mongoose from "mongoose";

import key from "./keys";
import authRouter from "./routes/auth";
import postRouter from "./routes/post";
import verifyToken from "./middleware/verify";

const app = express();
const PORT = 3000 | process.env;

mongoose
  .connect(key.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log("Error", err));

app.use(express.json());
app.use("/", authRouter);
app.use("/posts", verifyToken, postRouter);

// app.use(apiErrorHandler());

app.listen(PORT, () => {
  console.log(`Server started on ${3000}`);
});
