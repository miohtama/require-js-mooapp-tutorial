// mooficator.js - defines a module which depends on third part and internal modules

// This example is classy.

/*globals console*/

define(["jquery", "mooapp/moo"], function ($, moo) {

    // ES5 please!
    "use strict";


    // In this point we can poke a variable in a module
    console.log("The cow is this " + moo.cowSize + " big");

    // Declare a Mooficator class in prototypish way
    function Mooficator() {
    }

    $.extend(Mooficator.prototype, {

        // Call a function in module we depent on
        party : function() {
            moo.blinkOn();
        }

    });

    // Moduke exports
    // We can declare several classes per module
    // or we could directly export a class as AMD dependecy
    // by simply returning the constructor object here
    return {
        Mooficator : Mooficator
    };

});
