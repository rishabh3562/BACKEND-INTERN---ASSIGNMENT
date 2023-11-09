
const express = require('express');
const playersRoutes = require('./routes/playersRoutes');
const connectDB = require('./config/database');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;


app.use(express.json()); 


app.use('/', playersRoutes);
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
