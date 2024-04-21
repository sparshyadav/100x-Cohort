const mongoose=require("mongoose");
require("dotenv").config();

const connectDatabase=async()=>{
    const isConnected=await mongoose.connect(process.env.DATABASE_URL)  ;

    if(isConnected){
        console.log("Database Connected Successfully");
    }
    else{
        console.log("Issue in Establishing Connection with Database");
    }
}

module.exports=connectDatabase;