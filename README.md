# Student API

A simple REST API for managing student records with a web interface for testing.

## Features

- CRUD operations for student records
- RESTful API endpoints
- Web interface for testing
- In-memory data storage

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the files
2. Open a terminal in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```
   The server will start on http://localhost:3000

2. Open `index.html` in your web browser to access the web interface

## API Endpoints

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a specific student
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

## Testing the API

### Using the Web Interface

1. Add a new student:
   - Fill in the name, age, and grade fields
   - Click "Add Student"

2. View students:
   - The list of students is automatically displayed
   - Each student shows their name, age, and grade

3. Delete a student:
   - Click the "Delete" button next to any student

### Using cURL

1. Get all students:
   ```bash
   curl http://localhost:3000/api/students
   ```

2. Get a specific student:
   ```bash
   curl http://localhost:3000/api/students/1
   ```

3. Create a new student:
   ```bash
   curl -X POST http://localhost:3000/api/students \
   -H "Content-Type: application/json" \
   -d '{"name": "John Doe", "age": 20, "grade": "A"}'
   ```

4. Update a student:
   ```bash
   curl -X PUT http://localhost:3000/api/students/1 \
   -H "Content-Type: application/json" \
   -d '{"name": "John Doe Updated", "age": 21, "grade": "A+"}'
   ```

5. Delete a student:
   ```bash
   curl -X DELETE http://localhost:3000/api/students/1
   ```

## Development

For development with automatic server restart on file changes:
```bash
npm run dev
```

## Notes

- The data is stored in memory and will reset when you restart the server
- The API supports CORS for cross-origin requests
- The web interface is for testing purposes only
