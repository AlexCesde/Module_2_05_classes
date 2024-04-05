class Car {
    static color = "red";

    constructor(brand = "Mazda") {
        this._brand = brand
    }

    // Setters
    set brand(brand) {
        this._brand = brand;
    }

    // Getters
    get brand() {
        return this._brand;
    }
}

function example() {
    let out = ""

    // New instance
    out += `<h1>Class: ${Car.color}</h1>`;
    const demoCar = new Car("Ferrari");
    out += `<h1>Class: ${demoCar.brand}</h1>`;

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);