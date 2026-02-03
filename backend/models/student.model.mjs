import mongoose from "mongoose";
import 'dotenv/config';

const studentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    rollNo:{
        type: Number,
        required: true,
        minimum: 1,
        maximum: 30,
        description: "Roll no must be in between 1 to 30"
    },
    Class:{
        type: String,
        required: true,
        minimum: 6,
        maximum: 10,
        description: "Class must be in between 6 to 10"
    },
    Address:{
        type: String,
        required: true
    },
    

},{timestamps:true})
const Student = mongoose.model('Student', studentSchema)
export default Student