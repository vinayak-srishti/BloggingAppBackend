const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    Title:{type:String},
    Image:{type:Object},
    SubTitle:{type:String},
    Discription:{type:String},
    UserId:{type:mongoose.Schema.Types.ObjectId,ref:'Users'}
})
module.exports=mongoose.model('Blogs',BlogSchema)