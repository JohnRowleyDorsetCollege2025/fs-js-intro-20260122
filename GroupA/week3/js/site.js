document.addEventListener("DOMContentLoaded", () => {
    init();
})

function init() {
    console.log('site js is loaded via listener');
}

function btnSave() {
    var element = document.getElementById("tbFlavour")
    localStorage.setItem("flavour", element.value);

};

function btnRetrieveFlavour() { 

var flavour = localStorage.getItem("flavour");
console.log(flavour)


};