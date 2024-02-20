const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/360Views"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo successfully");
    })
}

module.exports=connectToMongo;