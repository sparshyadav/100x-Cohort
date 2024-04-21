const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedTodo = await Todo.findByIdAndDelete({_id: id});

        res.status(200).json({
            success: true,
            data: deletedTodo,
            message: "Todo Deleted Successfully"
        })
    }
    catch (err) {
        console.log("An Error Occurred While Deleting Todo from Database");
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}