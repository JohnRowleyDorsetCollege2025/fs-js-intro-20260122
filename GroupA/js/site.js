function init() {
    var myName = 'John Rowley';
    var location = 'Dorset College';
    // string interpolation
    var greeting = `Hello World. This is ${myName} broadcasting from ${location}`;
    RenderMessage(greeting);
    AddEventListeners();
    RenderPlanets();
    RenderList(GetRainbow());
    RenderList(GetDisneyDwarves());
}

function AddEventListeners() {

    var btnElement = document.getElementById("btnShowDMY")
    if(btnElement==null) {
        return;
    }
    btnElement.addEventListener("click", function () {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        RenderMessage(`${day}-${month}-${year}`);
    })

       btnElement.addEventListener("mouseover", function () {
        RenderMessage(``);
    })
}

function RenderMessage(message) {
    var element = document.getElementById("messagePanel");
    element.innerHTML = message;
}

function ShowDate() {
    const today = new Date();
    const formattedDate = today.toDateString();
    RenderMessage(formattedDate);
}