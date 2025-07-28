import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());








// does a task
async function doTask() {
    await new Promise(resolve => setTimeout(resolve, 3000));
}

// TODO: replace any with the correct type
function createTask(taskName: any, userId: any): void {

    // TODO: implement

    return;
}

// TODO: replace any with the correct type
function getTasks(userId: any): any {
    let taskId, taskName, completed: any;

    // TODO: implement

    return [{
        "taskId": taskId,
        "taskName": taskName,
        "completed": completed
    }];
}












// API Routes
app.post('/api/tasks', (req, res) => {
    try {
        const { taskName, userId } = req.body;
        
        if (!taskName || !userId) {
            return res.status(400).json({ error: 'taskName and userId are required' });
        }
        
        createTask(taskName, userId);
        res.status(201).json({ message: 'Task created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
});

app.get('/api/tasks/:userId', (req, res) => {
    try {
        const { userId } = req.params;
        const userTasks = getTasks(userId);
        res.json(userTasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get tasks' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});