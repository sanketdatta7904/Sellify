const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();

const mongoose = require("mongoose")
const cors = require("cors")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")


mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB connection success"))
.catch(err => console.log(err))

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Running")
})


