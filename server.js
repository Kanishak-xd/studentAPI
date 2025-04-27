const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for students
let students = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 19, grade: 'B+' }
];

// Get all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Get a single student by ID
app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
});

// Create a new student
app.post('/api/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade
    };
    students.push(student);
    res.status(201).json(student);
});

// Update a student
app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ message: 'Student not found' });

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.grade = req.body.grade || student.grade;

    res.json(student);
});

// Delete a student
app.delete('/api/students/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).json({ message: 'Student not found' });

    students.splice(studentIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Student API is running on http://localhost:${port}`);
}); 