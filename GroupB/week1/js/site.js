function init() {

   //RenderPlanets();
   // RenderRainbow();
    RenderList(GetPlanets(), "listOfPlanets")
    RenderList(GetRainbow(), "rainbow")
    RenderList(["Bashful","Doc","Dopey","Grumpy","Happy", "Sneezy", "Sleepy"], "DisneyDwarves")
   // Set up a button so it responds to a click event
    var button = document.getElementById('btnShowYearMonthDay');
    button.addEventListener("click", function () {
        ShowYearMonthDay()
    });

    button.addEventListener("mouseover", function () {
       AddMessage('mouse over')
    });

     button.addEventListener("mouseout", function () {
       AddMessage('')
    });
}
function ShowYearMonthDay() {
    const today = new Date();
    const day=today.getDate();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const formattedDate = today.toDateString();
    AddMessage(`${year}-${month}-${day}`);
}

function AddMessage(message) {
    var object = document.getElementById("messageDiv");
    object.innerHTML = message
}

function ShowDate() {
    const today = new Date();
    const formattedDate = today.toDateString();
    // var object = document.getElementById("messageDiv");
    // object.innerHTML = formattedDate
    AddMessage(formattedDate);

}

