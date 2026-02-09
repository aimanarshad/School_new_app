import mongoose from "mongoose";
import 'dotenv/config';

const db = 'schoolManagement';
const url = `${process.env.MONGODB_URL}${db}?retryWrites=true&w=majority`;


const connectToDB=async()=>{
    mongoose.connection.on("open", () => {
      console.log("MongoDB connected");
    });
    mongoose.connection.on("error", () => {
      console.error("Error in connecting MongoDB");
    });
}

mongoose.connect(url
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
)
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.log("MongoDB connection error:", err));
export default connectToDB;
