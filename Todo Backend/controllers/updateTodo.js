const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )

        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: "Todo Updated Successfully"
        })
    }
    catch (err) {
        console.log("An Error Occurred While Updating Todo in Database");
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}