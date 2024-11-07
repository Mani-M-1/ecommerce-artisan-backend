const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());


// port
const port = process.env.PORT || 8080

// mongodb connection 
mongoose.connect(process.env.MONGOOSE_URI)
.then(() => console.log("DB connected successfully!"))
.catch((err) => {
    console.log(`Error connecting to Mongoose: ${err.message}`);
    process.exit(1);
})


// routes
const orderRoute = require("./routes/orderRoutes");


// apis
app.use("/api/order", orderRoute);



app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})