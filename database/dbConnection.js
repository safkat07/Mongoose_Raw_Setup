import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'JOB_SEEKING_WEBSITE'
    })
        .then(() => {
            console.log('Connected to Database')
        })
        .catch((err) => {
            console.log(`Some Error while connecting to Database: ${err}`);
        })
}