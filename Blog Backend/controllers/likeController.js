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
        console.log(err);
        res.json({
            success: false,
            message: "An error Occcured while Liking the Post"
        })
    }
}

exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        const updatedPost = await Post.findByIdAndDelete(post,
            {
                $pull: {
                    likes: like
                }
            },
            { new: true }
        )

        const deletedLike = await Like.findOneAndDelete({
            post: post,
            _id: like
        })

        res.json({
            post: updatedPost
        })
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "An error Occurred While Unliking the Post"
        })
    }
}