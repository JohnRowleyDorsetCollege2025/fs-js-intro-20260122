
function RenderList(list) {
  
    var ol = document.createElement("ol");

    for (const item of list) {
        // console.log(planet);
        const li = document.createElement("li");
        li.textContent = item;
        ol.append(li);
    }
    var containingDiv = document.getElementById("listOfItems");
   // containingDiv.innerHTML = ""; // empty the div
    containingDiv.append(ol);
}