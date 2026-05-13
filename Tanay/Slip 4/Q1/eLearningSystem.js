const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Sample courses
const courses = [
    { id: 1, title: "Full Stack Web Development", duration: "3 Months" },
    { id: 2, title: "Python for Data Science", duration: "2 Months" },
    { id: 3, title: "AngularJS Beginner to Advanced", duration: "1.5 Months" }
];

// Homepage - list courses
app.get('/', (req, res) => {
    let html = "<h2>eLearning Courses</h2><ul>";
    courses.forEach(course => {
        html += `<li>${course.title} - Duration: ${course.duration} 
                    <a href="/enroll/${course.id}">Enroll</a></li>`;
    });
    html += "</ul>";
    res.send(html);
});

// Enroll page
app.get('/enroll/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        res.send("Course not found!");
        return;
    }

    res.send(`
        <h2>Enroll in ${course.title}</h2>
        <form method="POST" action="/enroll/${course.id}">
            <label>Student Name:</label>
            <input type="text" name="studentName" required><br><br>
            <button type="submit">Enroll</button>
        </form>
    `);
});

// Handle enrollment
app.post('/enroll/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        res.send("Course not found!");
        return;
    }

    const studentName = req.body.studentName;
    res.send(`<h3>${studentName}, you are successfully enrolled in ${course.title}!</h3>`);
});

// Start server
app.listen(3000, () => console.log("eLearning System running at http://localhost:3000"));