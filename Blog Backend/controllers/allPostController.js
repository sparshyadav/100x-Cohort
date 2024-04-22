const Post = require("../models/post")


exports.getAllPosts = async (req, res) => {
    try {
        let allBlogs = await Post.find({})
            .populate("comments").exec();

        res.json({
            success: true,
            data: allBlogs
        })
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            data: "An Error Occured while Getting all the posts"
        })
    }
}