import mongoose from 'mongoose';


const connectDB = async(url) =>{
    try {
        const db_options = {
            user: 'prince',
            pass: '123456',
            dbName: 'narutodb',
            authSource: 'admin'
        }
        await mongoose.connect(url, db_options);
        console.log(`Successfully Connected to ${db_options.dbName}........`);
    } catch (error) {
        console.log(error);
    }
}


export default connectDB;