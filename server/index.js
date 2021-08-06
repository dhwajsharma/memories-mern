import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"

const app = express();

app.use("/posts", postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = "mongodb+srv://dhwaj1234:dhwaj1234@cluster0.jhsac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch((err) => console.log(err.message))

mongoose.set("useFindAndModify", false)

