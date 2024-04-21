const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTodo = await Todo.create({
            title, description
        });

        res.status(200).json({
            success: true,
            data: newTodo,
            message: "New Todo Created and Added"
        });
    }
    catch (err) {
        console.log("An Error Occurred While Adding Todo in Database");
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}