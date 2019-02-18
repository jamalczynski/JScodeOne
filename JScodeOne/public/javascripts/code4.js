/*Movie Kiosk:  Write the code to run a kiosk at a movie theater.
Program should loop infinitely to allow users to either see average
rating of previous user entries, or enter their own review.
Requirements:
Should store movie title, current user rating, total rating, and number of ratings
Should display a list of movies for user to review or option to review a new one
Should allow user to select a movie to see average rating
Should allow sorting of highest to lowest rated movies*/

/**
 * @author Malczynski, Jarod (jarodmalczynski@gmail.com)
 * @version 0.0.1
 * @summary coding assignment four
 */

"use strict";
const PROMPT = require ('readline-sync');

let continueResponse, continueResponseTwo, continueResponseThree, continueResponseFour;
let menu, gameRating, swordRating, numGameRatings, numSwordRatings, NGNLratings, SAOratings,
NGNLavg, SAOavg, yourAnimeRating, yourRatings, yourAverage, numYourRatings;
let yourAnime;
const MIN_RATING = 0, MAX_RATING = 5;

/**
 * @method main
 * @description runs code
 * @returns {null}
 */
function main() {
    doStuffz();
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
        setMenu();
        switch (menu) {
            case 1: setContinueResponseTwo();
            while (continueResponseTwo === 1) {
                rateGame();
                setContinueResponseTwo();
            }
                break;
            case 2: setContinueResponseThree();
            while (continueResponseThree === 1) {
                rateSword();
                setContinueResponseThree();
            }
                break;
            case 3: setContinueResponseFour();
            while (continueResponseFour === 1) {
                newAnime();
                rateYourAnime();
                setContinueResponseFour();
            }
                break;
            case 4:
                finalOrder();
                printGoodbye();
                break;
            default: console.log(`! ERROR !`);
        }
    }
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
 * @description continues
 * @returns {null}
 */
function setContinueResponseTwo() {
    if (continueResponseTwo === 1 || continueResponseTwo === 0) {
        continueResponseTwo = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponseTwo !== 0 && continueResponseTwo !== 1) {
            console.log(`${continueResponseTwo} is an incorrect value. Please try again.`);
            continueResponseTwo = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponseTwo = 1;
    }
}

/**
 * @method
 * @description continues
 * @returns {null}
 */
function setContinueResponseThree() {
    if (continueResponseThree === 1 || continueResponseThree === 0) {
        continueResponseThree = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponseThree !== 0 && continueResponseThree !== 1) {
            console.log(`${continueResponseThree} is an incorrect value. Please try again.`);
            continueResponseThree = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponseThree = 1;
    }
}

/**
 * @method
 * @description continues
 * @returns {null}
 */
function setContinueResponseFour() {
    if (continueResponseFour === 1 || continueResponseFour === 0) {
        continueResponseFour = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponseFour !== 0 && continueResponseFour !== 1) {
            console.log(`${continueResponseFour} is an incorrect value. Please try again.`);
            continueResponseFour = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponseFour = 1;
    }
}

/**
 * @method
 * @description turns a bunch of stuffz into numbers
 * @returns {null}
 */
function doStuffz() {
    NGNLratings = 0;
    numGameRatings = 0;
    SAOratings = 0;
    numSwordRatings = 0;
    yourRatings = 0;
    numYourRatings = 0;
}

/**
 * @method
 * @description select what to rate
 * @returns {null}
 */
function setMenu() {
    menu = -1;
    while (menu !== 1 && menu !== 2 && menu !== 3 && menu !== 4) {
        menu = Number(PROMPT.question(
            `\tWould you like to:
           \t\t1) Rate No Game No Life
           \t\t2) Rate Sword Art Online
           \t\t3) Enter another anime to rate
           \t\t4) Show ratings high - low
           \t\tCHOOSE: `
        ));
    }
}

/**
 * @method
 * @description rate NGNL
 * @returns {null}
 */
function rateGame() {
    gameRating = Number(PROMPT.question(`\nPlease enter the star rating you would give No Game No Life [0-5]: `));
    while (gameRating < MIN_RATING || gameRating > MAX_RATING) {
        console.log(`${gameRating} is an incorrect value. Please try again.`);
        gameRating = Number(PROMPT.question(`\nPlease enter the star rating you would give No Game No Life [0-5]: `));
    }
    NGNLratings += gameRating;
    numGameRatings++;
    NGNLavg = NGNLratings / numGameRatings;
    console.log(`\nYour average rating for NGNL is ${NGNLavg} stars!`);
}

/**
 * @method
 * @description rate SAO
 * @returns {null}
 */
function rateSword() {
    swordRating = Number(PROMPT.question(`\nPlease enter the star rating you would give Sword Art Online [0-5]: `));
    while (swordRating < MIN_RATING || swordRating > MAX_RATING) {
        console.log(`${swordRating} is an incorrect value. Please try again.`);
        swordRating = Number(PROMPT.question(`\nPlease enter the star rating you would give Sword Art Online [0-5]: `));
    }
    SAOratings += swordRating;
    numSwordRatings++;
    SAOavg = SAOratings / numSwordRatings;
    console.log(`\nYour average rating for SAO is ${SAOavg} stars!`);
}

/**
 * @method
 * @description name anime of choice
 * @returns {null}
 */
function newAnime() {
   // yourAnime = PROMPT.question(`\nPlease enter the name of the anime you wish to rate: `);
    while (! yourAnime || !/^[a-zA-Z -]{1,30}$/.test(yourAnime)) {
        yourAnime = PROMPT.question(`Please enter the name of the anime you wish to rate: `);
        if (! /^[a-zA-Z -]{1,30}$/.test(yourAnime)) {
            console.log(`${yourAnime} is invalid. Please try again.`);
        }
    }
}

/**
 * @method
 * @description rate anime of choice
 * @returns {null}
 */
function rateYourAnime() {
    yourAnimeRating = Number(PROMPT.question(`\nPlease enter the star rating you would give ${yourAnime} [0-5]: `));
    while (yourAnimeRating < MIN_RATING || yourAnimeRating > MAX_RATING) {
        console.log(`${yourAnimeRating} is an incorrect value. Please try again.`);
        yourAnimeRating = Number(PROMPT.question(`\nPlease enter the star rating you would give ${yourAnime} [0-5]: `));
    }
    yourRatings += yourAnimeRating;
    numYourRatings++;
    yourAverage = yourRatings / numYourRatings;
    console.log(`Your average rating for ${yourAnime} is ${yourAverage} stars!`);
}

/**
 * @method
 * @description prints movies in rating order
 * @returns {null}
 */
//yourAverage3 SAOavg2 NGNLavg1 - 123/, 132/, 321, 312, 213, 231
function finalOrder() {
    if (NGNLavg > SAOavg && SAOavg > yourAverage) {
        console.log(`
        \nMovie:\tRating
        \nNGNL:\t${NGNLavg}      
        \nSAO:\t${SAOavg}
        \n${yourAnime}:\t${yourAverage}`);
    } else if (NGNLavg > yourAverage && yourAverage > SAOavg) {
        console.log(`
        \nMovie:\tRating
        \nNGNL:\t${NGNLavg}
        \n${yourAnime}:\t${yourAverage}
        \nSAO:\t${SAOavg}`);
    } else if (yourAverage > SAOavg && SAOavg > NGNLavg) {
        console.log(`
        \nMovie:\tRating
        \n${yourAnime}:\t${yourAverage}
        \nSAO:\t${SAOavg}
        \nNGNL:\t${NGNLavg}`);
    } else if (yourAverage > NGNLavg && NGNLavg > SAOavg) {
        console.log(`
        \nMovie:\tRating
        \n${yourAnime}:\t${yourAverage}
        \nNGNL:\t${NGNLavg}
        \nSAO:\t${SAOavg}`);
    } else if (SAOavg > yourAverage && yourAverage > NGNLavg) {
        console.log(`
        \nMovie:\tRating
        \nSAO:\t${SAOavg}
        \n${yourAnime}:\t${yourAverage}
        \nNGNL:\t${NGNLavg}`);
    } else {
        console.log(`
        \nMovie:\tRating
        \nSAO:\t${SAOavg}
        \nNGNL:\t${NGNLavg}
        \n${yourAnime}:\t${yourAverage}`);
    }
}

/**
 * @method
 * @description rate anime of choice
 * @returns {null}
 */
function printGoodbye() {
    console.log(`\nThank your for using our program, have a nice day.`);
}