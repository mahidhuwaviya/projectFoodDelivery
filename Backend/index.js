import cors from "cors";
import cookieParser from "cookie-parser";
import checkcookies from "./middleware/checkCookies.js";
import express from "express";
const app = express();
const PORT = 5000;

import Connecttomongodb from "./connection.js";

import userRoutes from "./routes/user.js";
import dataRoutes from "./routes/data.js";
import forCookieRoutes from "./routes/checkCookies.js";
import orderRoutes from "./routes/userOrder.js";

Connecttomongodb();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Your frontend's domain
  credentials: true, // Allow credentials (cookies) to be sent
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(checkcookies("token"));

app.get("/", (req, res) => {
  res.end("Hello from server");
});

app.use("/cookie", forCookieRoutes);
app.use("/user", userRoutes);
app.use("/data", dataRoutes);
app.use("/order", orderRoutes);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
