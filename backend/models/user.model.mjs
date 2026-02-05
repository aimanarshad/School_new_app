import mongoose from "mongoose";
import 'dotenv/config';
import connectToDB from "../db/dbConnection.mjs";

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: String,
        required: true
    },


}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User 