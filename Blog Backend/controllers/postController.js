const Post = require("../models/post");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const post=new Post({
            title, body
        })

        const savedPost = await post.save();

        res.json({
            success: true,
            post: savedPost,
            message: "Post Created Successfully"
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Error While Creating Post"
        })
    }
}