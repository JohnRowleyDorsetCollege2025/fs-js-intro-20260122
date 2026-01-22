function GetRainbow() {
    return ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
}

// 

function RenderRainbow() {
    const planets = GetRainbow();
    var ol = document.createElement("ol");

    for (const planet of planets) {
        // console.log(planet);
        const li = document.createElement("li");
        li.textContent = planet;
        ol.appendChild(li);
    }
    var container = document.getElementById("rainbow");
    container.innerHTML="";
    container.appendChild(ol);
}

