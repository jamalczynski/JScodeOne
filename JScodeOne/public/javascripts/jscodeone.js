"use strict";
const PROMT = require ('readline-sync');

let lotNumber, numBedrooms, numBathrooms, numGarage, total;
let bedCost, bathCost, garageCost;
const BASE = 50000, BEDROOM = 17000, BATHROOM = 12500, GARAGE = 6000;

function main() {
    setLotNumber();
    setNumBedrooms();
    setNumBathrooms();
    setNumGarage();
    calcCost();
}

main();

function setLotNumber() {
    lotNumber = Number(PROMT.question('\nwhat is your lot number?'));
}

function setNumBedrooms() {
    numBedrooms = Number(PROMT.question('\nHow many bedrooms would you like?'));
    bedCost = BEDROOM * numBedrooms;
}

function setNumBathrooms() {
    numBathrooms = Number(PROMT.question('\nHow many bathrooms would you like?'));
    bathCost = BATHROOM * numBathrooms;
}

function setNumGarage() {
    numGarage = Number(PROMT.question('\nHow many cars would you like to fit in your garage?'))
    garageCost = GARAGE * numGarage;
}

function calcCost() {
    total = BASE + bedCost + bathCost + garageCost;
    console.log("\nThe final price of you house is " + total + " dollars.");
}