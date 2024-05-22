// routes/taskRoutes.js
import express from 'express';
const router = express.Router();
import { addTask, updateTask, deleteTask, getAllTasksByUserId } from '../controller/taskController.js';
import { auth } from '../middleware/authMiddleware.js';

router.post('/create-task/:id', auth, addTask);
router.put('/update-task/:id', auth, updateTask);
router.delete('/del-task/:id', auth, deleteTask);
router.get('/get-tasks/:id', auth, getAllTasksByUserId);

export default router;
