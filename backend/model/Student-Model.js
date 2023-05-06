const mongoose=require("mongoose"); 
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    instituteCode:{
        type:Number,
        required:true

    }
});

const Student=mongoose.model("Studnet",studentSchema);
module.exports=Student;