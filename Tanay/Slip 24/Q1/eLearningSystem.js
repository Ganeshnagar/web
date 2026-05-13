const express = require('express');
const app = express();
const port = 3000;


const courses = [
    { id: 1, title: 'JavaScript Basics', content: 'Introduction to JavaScript, Variables, Functions, Loops' },
    { id: 2, title: 'Node.js Fundamentals', content: 'Modules, HTTP, File System, Events' },
    { id: 3, title: 'AngularJS SPA', content: 'ng-app, ng-controller, ng-view, Routing, ng-repeat' }
];


app.use(express.static('public'));


app.get('/', (req, res) => {
    let html = '<h2>Welcome to eLearning System</h2><ul>';
    courses.forEach(course => {
        html += `<li><a href="/course/${course.id}">${course.title}</a></li>`;
    });
    html += '</ul>';
    res.send(html);
});


app.get('/course/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);

    if (course) {
        res.send(`
            <h2>${course.title}</h2>
            <p>${course.content}</p>
            <a href="/">Back to courses</a>
        `);
    } else {
        res.status(404).send('<h3>Course not found</h3><a href="/">Back to courses</a>');
    }
});

//
app.listen(port, () => {
    console.log(`eLearning system running at http://localhost:${port}`);
});