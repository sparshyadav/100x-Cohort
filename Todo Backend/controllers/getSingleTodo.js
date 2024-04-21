const Todo = require("../models/Todo");

exports.getSingleTodo = async (req, res) => {
    try {
        const todoId = req.params.id;

        const requiredTodo = await Todo.findOne({ _id: todoId });

        res.status(200).json({
            success: true,
            data: requiredTodo,
            message: "Successfully Extracted Single Todo From Database"
        })
    }
    catch (err) {
        console.log("An Error Occurred While Extracting Single Todo from Database");
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}