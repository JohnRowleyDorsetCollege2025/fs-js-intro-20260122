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
    renderCoursesAsTable(data)
}

function renderCourses(courses) {
    var container = document.getElementById("courses");

    courses.forEach(function (course) {
        const p = document.createElement("p");
        p.innerHTML=course.courseName;
        container.append(p);
    })   
}

function renderCoursesAsTable(courses) {

    var tbody = document.querySelector("#courseTable tbody");
    
    courses.forEach(function (course) {
        const row = document.createElement("tr");

        cellId = document.createElement("td");
        cellId.textContent=course.id;
        row.append(cellId);
        
        cellTitle = document.createElement("td");
        cellTitle.textContent=course.courseName;
        row.append(cellTitle);
       
        tbody.append(row);
    })   

   
}