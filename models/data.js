const mongoose=require('mongoose')

const data=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be provide"]
    },
    email:{
        type:String,
        required:[true,"email must be provide"]
    },
    message:{
        type:String,
        required:[true,"message must be provide"]
    }
});
const Data=mongoose.model("yashvarshney",data)
module.exports=Data;