document.addEventListener("DOMContentLoaded", () => {
    init();
})

function init() {
    console.log('site js is loaded via listener');
    SaveFlavourToStorage();
    RetrieveFlavourFromStorage();
}

function SaveFlavourToStorage() {
     localStorage.setItem("flavour","Vanilla");
}

function RetrieveFlavourFromStorage() {
    console.log(localStorage.getItem("flavour"))
}

function btnSave() {

    const today=new Date();
    const dayName = today.toLocaleDateString(undefined,{weekday: "long"});
    
    localStorage.setItem("today", dayName);

    let favouriteFlavour = document.getElementById("tbFlavour").value;

    localStorage.setItem("flavour",favouriteFlavour);
}

function btnRetrieveFlavour() { 
    const today = localStorage.getItem("today");
    console.log(`Today is ${today}`)

    const favouriteFlavour = localStorage.getItem("flavour");
    console.log(`On ${today} your favourite flavour is ${favouriteFlavour}`)
}