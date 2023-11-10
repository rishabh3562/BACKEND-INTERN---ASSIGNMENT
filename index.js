// index.js
const express = require('express');
const playersRoutes = require('./routes/playersRoutes');
const connectDB = require('./config/database');
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("./middlewares/error");
dotenv.config();
const port = process.env.PORT || 3000;
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
app.use(express.json());
app.use('/', playersRoutes);
app.use(errorMiddleware);
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});