const Todo = require("../models/Todo")

exports.getAllTodos = async (req, res) => {
    try {
        let allTodos = await Todo.find({});

        res.status(200).json({
            succes: true,
            data: allTodos,
            message: "All Todo's Extracted"
        })
    }
    catch (err) {
        console.log("An Error Occurred While Extracting All Todo's from Database");
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}
