const Like = require("../models/like");
const Post = require("../models/post");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;

        const like = new Like({
            post, user
        })

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,
            {
                $push: {
                    likes: savedLike._id
                }
            },
            { new: true }
        ).populate("likes").exec();

        res.json({
            post: updatedPost
        })
    }
    catch (err) {

    }
}