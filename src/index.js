import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env' // Adjusted to relative path
});

// console.log("MONGODB_URI: ", process.env.MONGODB_URI); // Add this line

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error before listening the app: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is succesfully running on http://localhost:${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGODB Connection failed in index.js: ", error);
})


/*
import mongoose, { mongo } from "mongoose";
import {DB_NAME} from "./constants.js";
import express from 'express'

const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App listening on http://localhost:${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})()
*/
