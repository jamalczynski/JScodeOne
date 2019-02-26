/*The Curl Up and Dye Beauty Salon maintains a master file that contains a record for each of its clients.
Fields in the master file include the client's ID number, first name, last name, and total amount spent this
year. Every week, a transaction file is produced. It contains a customer's ID number, the service received
(for example, Manicure), and the price paid. Each file is sorted in ID number order.
Write a program that matches the master and transaction file records and updates the total paid for each client by
adding the current week's price paid to the cumulative total. Not all clients purchase services each week. The
output is the updated master file and an error report that lists any transaction records for which no master
record exists. Output a coupon for a free haircut each time a client exceeds $750 in services. The coupon, which
contains the client's name and an appropriate congratulatory message, is output during the execution of the
update program when a client total surpasses $750.*/

/**
 * @author Malczynski, Jarod (jarodmalczynski@gmail.com)
 * @version 0.0.1
 * @summary coding assignment five
 */

"use strict";
const PROMPT = require('readline-sync');
const IO = require('fs');

let continueResponse;
let numCustomers, freeCuts;
let file = [];

/**
 * @method main
 * @description runs code
 * @returns {null}
 */
function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
        setNumCustomers();
        custFiles();
        setContinueResponse();
    }
    writeCustomers();
}

main();

/**
 * @method
 * @description continues/ends program
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @description sets number of customers
 * @returns {null}
 */
function setNumCustomers() {
    const MIN_CUST = 1, MAX_CUST = 5;
    while (! numCustomers || numCustomers < MIN_CUST || numCustomers > MAX_CUST) {
        numCustomers = Number(PROMPT.question(`\nHow many customers received service today [1-5]: `));
        if (isNaN(parseInt(numCustomers)) || numCustomers < MIN_CUST || numCustomers > MAX_CUST) {
            console.log(`${numCustomers} is an incorrect value. Please try again.`);
        }
    }
}

/**
 * @method
 * @description sets customers info
 * @returns {null}
 */
function custFiles() {
    const FREE_CUT_COST = 750;
    for (let i = 0; i < numCustomers; i++) {
        file[i] = [];
        console.log(`\nCustomer ID ${i + 1}:`);
        while (!file[i][0] || !/^[a-zA-Z -]{1,30}$/.test(file[i][0])) {
            file[i][0] = PROMPT.question(`Enter your first name: `);
            if (!/^[a-zA-Z -]{1,30}$/.test(file[i][0])) {
                console.log(`${file[i][0]} is invalid. Please try again.`);
            }
        }
        while (!file[i][1] || !/^[a-zA-Z -]{1,30}$/.test(file[i][1])) {
            file[i][1] = PROMPT.question(`Enter your last name: `);
            if (!/^[a-zA-Z -]{1,30}$/.test(file[i][1])) {
                console.log(`${file[i][1]} is invalid. Please try again.`);
            }
        }
        while (!file[i][2]) {
            file[i][2] = PROMPT.question(`Enter the service you received: `);
            if (!/^[a-zA-Z -]{1,30}$/.test(file[i][2])) {
                console.log(`${file[i][2]} is invalid. Please try again.`);
            }
        }
        while (!file[i][3]) {
            file[i][3] = Number(PROMPT.question(`Enter how much money you have spent on our services in the past year: `));
            if (isNaN(parseInt(file[i][3]))) {
                console.log(`${file[i][3]} is invalid. Please try again.`);
            }
            else if (file[i][3] >= FREE_CUT_COST) {
                freeCuts = (file[i][3] / FREE_CUT_COST);
                console.log(`Congratulations! You have earned ${freeCuts} free hair cuts!`);
            }
        }
}
}

/**
 * @method
 * @description prints stuff
 * @returns {null}
 */
function writeCustomers() {
    const COLUMNS = 4;
    for (let i = 0; i < file.length; i++) {
        if (file[i]) {
            for (let j = 0; j < COLUMNS; j++) {
                if (j < COLUMNS - 1) {
                    IO.appendFileSync(`../data/customer_data.csv`, `${file[i][j]},`);
                } else if (i < file.length - 1) {
                    IO.appendFileSync(`../data/customer_data.csv`, `${file[i][j]}\n`);
                } else {
                    IO.appendFileSync(`../data/customer_data.csv`, `${file[i][j]}`);
                }
            }
        }
    }
}