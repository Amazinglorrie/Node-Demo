import dotenv from "dotenv";
import connectDB from "./config/db.js";  // Changed this line
import {app} from "./config/app.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();  // Changed this line

        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });

    } catch (error) {
        console.log("MongoDB connection failed !!", error);
    }
}

startServer();