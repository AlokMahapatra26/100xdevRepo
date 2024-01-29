const Todo = require("../model/todoModel");

const getAllTodo = async (req,res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

const getTodo = async (req,res) => {

    const id = req.query.id;

    try{
        const todo = await Todo.findById(id);
        res.status(200).json(todo);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

const createTodo = async (req,res) =>{
    const {title , description} = req.body;

    try{
        const newTodo = new Todo({title , description});
        const savedTodo = await newTodo.save();
        res.status(200).json({success : true , savedTodo})
    }
    catch(error){
        res.status(500).json({error : error.message})
    }
}

module.exports = {getAllTodo , getTodo,  createTodo};