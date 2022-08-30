const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB connection success"))
.catch(err => console.log(err))

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Running")
})


