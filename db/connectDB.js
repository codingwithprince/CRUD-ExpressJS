import mongoose from 'mongoose';


const connectDB = async(url) =>{
    try {
        const db_options = {
            user: 'prince',
            pass: '123456',
            dbName: 'schooldb',
            authSource: 'admin'
        }
        await mongoose.connect(url, db_options);
        console.log('Successfully Connected........');
    } catch (error) {
        console.log(error);
    }
}


export default connectDB;