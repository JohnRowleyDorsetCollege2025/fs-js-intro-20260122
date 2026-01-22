

function RenderPlanets() {

    const list = GetPlanets().join(',');

    RenderMessage(list);

    var ol = document.createElement("ol");

    for (const planet of GetPlanets()) {
        // console.log(planet);
        const li = document.createElement("li");
        li.textContent = planet;
        ol.append(li);
    }
    var containingDiv = document.getElementById("planetsPanel");
    containingDiv.innerHTML = ""; // empty the div
    containingDiv.append(ol);
}