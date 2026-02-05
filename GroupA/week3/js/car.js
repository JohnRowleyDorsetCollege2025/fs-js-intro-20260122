

function btnSaveCar() {

    var mf = document.getElementById("tbMf").value
    var model = document.getElementById("tbModel").value
    var colour = document.getElementById("tbColour").value

    if (mf === null || model === null || colour === null) return;
    if (mf.length === 0 || model.length === 0 || colour.length === 0) return;

    


    

    // console.log(mf);
    // console.log(model);
    // console.log(colour);

    // localStorage.setItem("mf", mf);
    // localStorage.setItem("model", model);
    // localStorage.setItem("colour", colour);

    const CarObject = {
        "mf": mf,
        "model": model,
        "colour": colour
    }



    console.log({ CarObject }) // notice inside {} - renders as object
    console.log(JSON.stringify(CarObject)) // convert it to a string

    localStorage.setItem("carObject", JSON.stringify(CarObject)); // need to store as a string

    let fleet = GetFleetFromStorage();

    fleet.push(CarObject);
    localStorage.setItem("fleet", JSON.stringify(fleet)); // need to store as a string

    RenderFleet()

}
function btnRetrieveFleet() {

    // let fleet = GetFleetFromStorage();
    // for (const car of fleet) {
    //     console.log(`${car.mf} : ${car.model} : ${car.colour}`)
    // }

    RenderFleet();

}

function GetFleetFromStorage() {

    let fleet = JSON.parse(localStorage.getItem("fleet"));

    return fleet !== null ? fleet : [];
}

function RenderFleet() {

    let fleet = GetFleetFromStorage();

    var listingDiv = document.getElementById('fleetData');

    htmlString = [];

    for (const [index, currentCar] of fleet.entries()) {

        const removeButton = `<button class='btn btn-danger' onclick='RemoveCar(${index})'>Delete</button>`

        const rowItem = `<tr><td>${currentCar.mf}</td><td>${currentCar.model}</td><td>${currentCar.colour}</td><td>${removeButton}</td></tr>`;

        htmlString.push(rowItem);

    }

    listingDiv.innerHTML = htmlString.join(' ');

}

function RemoveCar(indexOfCar) {

    let fleet = GetFleetFromStorage();

    fleet.splice(indexOfCar, 1);

    localStorage.setItem("fleet", JSON.stringify(fleet));

    RenderFleet(fleet);
}