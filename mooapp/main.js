/*global console, require, document*/

//  http://requirejs.org/docs/api.html#config
require.config({

    // Our top folder is one level below this file (mooapp/main.js),
    // as we refer to modules in ../thirdparty and such
    baseUrl : "..",

    // You can map module names where they are located in source tree
    // (Useful for third party modules)
    paths: {
        "jquery" : "thirdparty/jquery",
        "colorpicker" : "thirdparty/colorpicker"
    },


    // Shim is used to wrap modules which are not natively AMD compatible
    // and do not define dependencies (you manually declare the dependencies)
    shim: {
        'thirdparty/colorpicker': ['thirdparty/jquery']
    },

    // We will bail out instantly if there is error loading any script
    // (default is 7 seconds -> causes you to stare empty console)
    waitSeconds : 1
});

// main module with dependencies
require(
    ["jquery", "colorpicker", "mooapp/mooficator"],
    function($, colorpicker, mooficator) {
        // Note that how we depent on jquery but alias it as $

        "use strict"; // ES5

        console.log("JS load complete");

        $(document).ready(function() {

            console.log("DOM tree constructed");

            // Use colorpicker module
            $("#pick-color").ColorPicker();

            // Use internal module
            $("#moo-demo").click(function() {
                var pureCoolness = new mooficator.Mooficator();
                pureCoolness.party();
            });
        });

    }
);
