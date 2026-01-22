function GetPlanets() {
    return ["Mercury", "Venus", "Earth", "Mars", "Jupiter","Saturn","Uranus","Neptune"]
}

// Red, Orange, Yellow, Green, Blue, Indigo, Violet

function RenderPlanets() {
    const planets = GetPlanets();
    var ol = document.createElement("ol");

    for (const planet of planets) {
        // console.log(planet);
        const li = document.createElement("li");
        li.textContent = planet;
        ol.appendChild(li);
    }
    var container = document.getElementById("listOfPlanets");
    container.innerHTML="";
    container.appendChild(ol);
}