/*
A program that accepts insurance policy data, including a policy number,
 customer last name, customer first name, birth date, premium due date
 (month, day, and year), and number of at-fault driver accidents in the
 last three years. Calculate customer age and set monthly insurance
 premium using the following criteria:

Base price = $100

Age >15 && < 30 = + $20

Age >= 30 && < 45 +10

Age >=60 +30

Each at-fault accident = + 50
*/

/**
 * @author Malczynski, Jarod (jarodmalczynski@gmail.com)
 * @version 0.0.1
 * @summary coding assignment two
 */

"use strict";
const PROMT = require ('readline-sync');

let continueResponse;
let policyNumber, premiumDueDate, faultAccidents, currentYear, birthYear, age, total;
let firstName, lastName;

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        firstName = askFirstName();
        lastName = askLastName();
        faultAccidents = askFaultAccidents();
        policyNumber = askPolicyNumber();
        premiumDueDate = askDueDate();
        currentYear = askCurrentYear();
        birthYear = askBirthYear();
        calcAge();
        calcPrice();
        final();
        setContinueResponse();
        return main();
    }
printGoodBye();
}


main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @description asks first name
 * @returns first name
 */
function askFirstName() {
    return PROMT.question(`\nPlease enter your first name: `);
}

/**
 * @method
 * @description asks last name
 * @returns last name
 */
function askLastName() {
    return PROMT.question(`\nPlease enter your last name: `);
}

/**
 * @method
 * @description prompts user for number of at-fault accidents they have been in in the past 3 years
 * @returns number of at-fault accidents
 */
function askFaultAccidents() {
    return Number(PROMT.question(`\nPlease enter how many at-fault accidents you have been in in the past 3 years: `));
}

/**
 * @method
 * @description asks policy number
 * @return users policy number
 */
function askPolicyNumber() {
    return Number(PROMT.question(`\nPlease enter your policy number: `));
}

/**
 * @method
 * @description asks for premium due date
 * @returns premium due date
 */
function askDueDate() {
    return PROMT.question(`\nPlease enter your premium due date [mm/dd/yyyy]: `);
}

/**
 * @method
 * @description asks the current year
 * @returns current year
 */
function askCurrentYear() {
    return Number(PROMT.question(`\nPlease enter the current year [yyyy]: `));
}

/**
 * @method
 * @description asks the users birth year
 * @returns birth year
 */
function askBirthYear() {
    return Number(PROMT.question(`\nPlease enter your birth year [yyyy]: `));
}

/**
 * @method
 * @description age calculator
 */
function calcAge() {
    age = currentYear - birthYear;
}

/**
 * @method
 * @description price calculator
 */
function calcPrice() {
    const BASE_PRICE = 100,
    MIN_AGE = 15,
    YOUNG_COST = 20,
    OLD_COST = 10,
    ANCIENT_COST = 30,
    PER_FAULT_COST = 50;
if (age > MIN_AGE) {
    if (age > 15 && age < 30) {
        total = BASE_PRICE + YOUNG_COST + PER_FAULT_COST * faultAccidents;
    } else if (age >= 30 && age < 45) {
        total = BASE_PRICE + OLD_COST + PER_FAULT_COST * faultAccidents;
    } else {
        total = BASE_PRICE + ANCIENT_COST + PER_FAULT_COST * faultAccidents;
    }
}
}

/**
 * @method
 * @description outputs final results
 */
function final() {
    console.log(`\n\t${firstName} ${lastName} Born: ${birthYear} Age: ${age}
    \n\tYour monthly insurance premium is $${total}...`);
}

/**
 * @method
 * @description prints goodbye
 */
function printGoodBye() {
    console.log(`\n\t Thank you for using our services, have a nice day.`);
}