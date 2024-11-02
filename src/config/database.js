 
import mongoose from 'mongoose';

export const connect = async ()=>{
    await mongoose.mongoose.connect('mongodb://localhost/twitter_Dev')
}

 