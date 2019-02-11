/*
Design a program for the Hollywood Movie Rating Guide, in which users continuously enter a value from   --> 0 to 5 <--
that indicates the number of stars they are awarding to a movie title they are prompted for. The program executes
continuously until a user decides to quit. If a user enters a star value that does not fall in the correct range,
re-prompt the user three (3) times until a correct value is entered. At the end of the program, display the average
star rating for the movie.
*/

/**
 * @author Malczynski, Jarod (jarodmalczynski@gmail.com)
 * @version 0.0.1
 * @summary coding assignment three
 */

"use strict";
const PROMPT = require ('readline-sync');

let continueResponse;
let rating, numberOfRatings, anotherRating, average;
let movie;

/**
 * @method main
 * @description runs code
 * @returns
 */
function main() {
    setThings();
    setContinueResponse();
    while (continueResponse === 1) {
        setRating();
        setAverage();
        setContinueResponse();
    }
    printGoodbye();
}

whatMovie();
main();

/**
 * @method
 * @description initializes two variables as numbers
 * @returns
 */
function setThings() {
    numberOfRatings = 0;
    anotherRating = 0;
}

/**
 * @method
 * @description continues/ends program
 * @returns
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
 * @description asks user for a movie
 * @returns
 */
function whatMovie() {
    movie = PROMPT.question(`\nPlease enter the name of the movie you would like to rate: `);
}

/**
 * @method
 * @description asks user for a movie rating
 * @returns
 */
function setRating() {
    rating = Number(PROMPT.question(`\nPlease enter the star rating you would give ${movie} [0-5]: `));
    while (rating !== 0 && rating !== 1 && rating !== 2 && rating !== 3 && rating !== 4 && rating !== 5) {
        console.log(`${rating} is an incorrect value. Please try again.`);
        rating = Number(PROMPT.question(`\nPlease enter the star rating you would give ${movie} [0-5]: `));
    }
    anotherRating = rating + anotherRating;
    numberOfRatings++;
}

/**
 * @method
 * @description sets the users average rating
 * @returns
 */
function setAverage() {
    average = anotherRating / numberOfRatings;
    console.log(`\nYour average rating is ` + average + ` stars!`);
}

/**
 * @method
 * @description prints goodbye
 * @returns
 */
function printGoodbye() {
    console.log(`\nThank you for rating ` + movie + `! Goodbye.`);
}