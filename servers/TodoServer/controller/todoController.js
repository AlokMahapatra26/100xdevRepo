const Todo = require("../model/todoModel");

let count = 0;
let bandwidthUsed = 0;
let cost = 0;

const getAllTodo = async (req,res) => {
   
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
        count++;
        bandwidthUsed += 0.00231
        cost += 0.001 
        console.log(`Request count : ${count}`);
        console.log(`BandWidth used : ${bandwidthUsed.toFixed(3)} mb`);
        console.log(`Total cost : rs ${cost.toFixed(1)} `);
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