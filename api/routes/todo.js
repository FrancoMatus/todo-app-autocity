const express = require('express');
const router = express.Router();
const ToDo = require('../models/Todo');

router.get('/', async (req, res) => { 
    const allTodo = await ToDo.find();
    res.json(allTodo)
})

router.post('/add', async (req, res) => {
    const newToDo = new ToDo(req.body);
    await newToDo.save();
    res.json(newToDo)
});

router.put('/edit/:_id', async (req, res) => {
    const idTodo = req.params._id;
    const encontrado = await ToDo.findByIdAndUpdate(idTodo, req.body);
    res.json(encontrado)
});

router.delete('/:_id', async (req, res) => {
    const idToDelete = req.params._id;
    // Hay que deletear el Todo.
    ToDo.findByIdAndUpdate(idToDelete, req.body);
    const actualizado = await ToDo.find()
    res.json(actualizado);
});

router.get('/filtertodo', async (req, res) => {
    const filteredToDo = await ToDo.find(req.body);
    res.json(filteredToDo);
})

router.get('/:_id', async (req, res) => {
    const idToDo = req.params._id;
    const ToDoToEdit = await ToDo.findOne({_id: idToDo})
    res.json(ToDoToEdit)
})

module.exports = router;