// moo.js - defines a standalone module

/*globals define, console, document, window*/

define(function () {

    // ES5 please!
    "use strict";

    // Declare an internal variable which cannot be seen outside the module
    var internalHandle = null;

    function magicianNeverRevealsHerSecret() {
        // cannot be seen outside
        // as it is inside the closure
        console.log("Moo goes dancing :D/-<");

        function blinky() {
            var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            document.body.style.backgroundColor = color;
        }

        if(!internalHandle) {
            // Start
            internalHandle = window.setInterval(blinky, 500);
        } else {
            // Stop
            window.clearInterval(internalHandle);
            internalHandle = null;
            document.body.style.backgroundColor = "#ffFFff";
        }
    }

    // Each define() returns an object
    // which is the "exports" of RequireJS
    // module
    return {

        // Export a variable
        cowSize : 5,

        //
        blinkOn : function() {
            // Call non-exposed method
            magicianNeverRevealsHerSecret();
        }
    };

});