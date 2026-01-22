function RenderList(data, container) {
   
    var ol = document.createElement("ol");

    for (const item of data) {
        // console.log(planet);
        const li = document.createElement("li");
        li.textContent = item;
        ol.appendChild(li);
    }
    var container = document.getElementById(container);
    container.innerHTML="";
    container.appendChild(ol);
}