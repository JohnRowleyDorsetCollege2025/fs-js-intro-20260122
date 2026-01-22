function init() {
    loadCourses();
}
async function loadCourses() {
    const API_URLx = 'https://localhost:7259/courses'
    const API_URL = 'data.json'
    const response = await fetch(API_URL);
    if (!response.ok) {
        console.log('error')
    }
    const data = await response.json();
    console.log(data);
    renderCourses(data);
}

function renderCourses(courses) {
    var container = document.getElementById("courses");
    courses.forEach(function (course) {
        const p = document.createElement("p");
        p.innerHTML=course.courseName;
        container.append(p);
    })   
}