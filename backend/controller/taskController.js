// controllers/taskController.js
import Task from "../models/taskModel.js";

export async function addTask(req, res) {
  try {
    const { title, description, dueDate } = req.body;
    const userId = req.user._id; 
    
    const task = new Task({ title, description, dueDate, userId });
    await task.save();
    
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send({ error: 'Failed to add task', message: error.message });
  }
}

export async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedTask) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.send(updatedTask);
  } catch (error) {
    res.status(400).send({ error: 'Failed to update task', message: error.message });
  }
}

export async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).send({ error: 'Task not found' });
    }

    res.send({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to delete task', message: error.message });
  }
}

export async function getAllTasksByUserId(req, res) {
  try {
    const { id } = req.params;
    const tasks = await Task.find({ userId: id });
    
    res.send(tasks);
  } catch (error) {
    res.status(400).send({ error: 'Failed to fetch tasks', message: error.message });
  }
}
