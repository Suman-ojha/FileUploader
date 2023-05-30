const mongoose = require('mongoose')


const Connection=async(uri)=>{
    try {
        
        await mongoose.connect(uri);
        console.log(`Database Connected Successfully...`);
    } catch (error) {
        
        console.log(`Database not Connected...`);
    }
}




Connection(process.env.MONGO_URI);