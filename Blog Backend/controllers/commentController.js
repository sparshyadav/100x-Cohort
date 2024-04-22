const Post = require("../models/post");
const Comment = require("../models/comment");

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        const comment = new Comment({
            post, user, body
        })

        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post,
            {
                $push: {
                    comments: savedComment._id
                }
            },
            { new: true }
        )
            .populate("comments").exec();

        res.json({
            success: true,
            post: updatedPost
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Error While Creating Comment"
        })
    }
}