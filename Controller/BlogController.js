const BlogSchema = require('../Schema/BlogSchema')

const AddBlog = (req, res) => {
    let Blog = new BlogSchema({
        Title: req.body.Title,
        Image: req.body.Image,
        SubTitle: req.body.SubTitle,
        Discription: req.body.Discription,
        UserId: req.params.UserId
    })
    Blog.save()
    .then((result)=>{
        return BlogSchema.findById(result._id).populate('UserId')
    })
    .then((result)=>{
        res.json({
            message:"Blog Added",
            data:result
        })
    })
    .catch((error)=>{
      console.log(error);
      
    })
}
const ViewAllBlogs = (req, res) => {
    BlogSchema.find()
        .then((result) => {
            res.json({
                message: "View All Blogs",
                data: result
            })
        })
        .catch((error) => {
            console.log(error);
        })
}

const EditBlog = (req, res) => {
    let datas = {
        Title: req.body.Title,
        SubTitle: req.body.SubTitle,
        Discription: req.body.Discription,
        Image: req.body.Image
    }
    BlogSchema.findByIdAndUpdate({ _id:req.params.id }, datas, { new: true })
        .then((result) => {
            res.json({
                message: "User Data Updated",
                data: result
            })
        })
        .catch((error) => {
            console.log(error);
        })
}
const DeleteBlog = (req, res) => {
    BlogSchema.findByIdAndDelete({ _id: req.body.id })
        .then((result) => {
            res.json({
                message: "Blog Deleted",
                data: result
            })
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports={AddBlog ,ViewAllBlogs ,EditBlog ,DeleteBlog}