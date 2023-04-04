const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./connection");

// Import all routers
const authRouter = require("./routes/UserRoute/user");
const sellProductRouter = require("./routes/SellProductRoute/SellProduct");
const exchangeProductRouter = require("./routes/ExchangeProductRoute/ExchangeProduct");
const conversationRouter = require("./routes/ChatRoute/Conversation");
const messageRouter = require("./routes/ChatRoute/Message");

// dotEnv Configuration
dotenv.config();

// JSON Configuration
app.use(express.json());

// Cors Configuration
app.use(cors());

// Mongoose Connection
connectToDatabase();

// API's routes
app.use("/serb/api/user", authRouter);
app.use("/serb/api/product", sellProductRouter);
app.use("/serb/api/exchangeproduct", exchangeProductRouter);
app.use("/serb/api/conversation", conversationRouter);
app.use("/serb/api/message", messageRouter);

// Listening to a server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
