import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());








/*
1. There are multiple tasks per user. The tasks can be stored as an in-memory store.

2. These tasks are compute heavy and take three seconds to complete. 

3. The server should only process one task at a time. NO task can run concurrently.

task t1 created at t=0, 
task t2 created at t=1,
task t3 created at t=3

# - processing
. - queued
O - task created

CORRECT
   t=0   t=1   t=2   t=3               t=6               t=9
t1 O#####|#####|#####|     |     |     |     |     |     |     |
t2 |     O.....|.....|#####|#####|#####|     |     |     |     |
t2 |     |     |     O.....|.....|.....|#####|#####|#####|     |


INCORRECT
   t=0   t=1   t=2   t=3               t=6               t=9
t1 O#####|#####|#####|     |     |     |     |     |     |     |
t2 |     O#####|#####|#####|     |     |     |     |     |     |
t3 |     |     |     O#####|#####|#####|     |     |     |     |
*/

// This is a task
interface Task {
    taskId: string,
    taskName: string,
    completed: boolean,
    userId: string,
}

// does a task
async function doTask(task: Task) {
    await new Promise(resolve => setTimeout(resolve, 3000));
}

// TODO: replace any with the correct type
function createTask(taskName: string, userId: string): void {

    // TODO: implement

    return;
}

// TODO: replace any with the correct type
function getTasks(userId: string):  Task[] {
    let taskId, taskName, completed: any;

    // TODO: implement

    return [];
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