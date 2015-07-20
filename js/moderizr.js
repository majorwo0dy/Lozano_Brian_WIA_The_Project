/**
 * Created by brianlozano on 7/16/15.
 */
Modernizr.load({
    test:Modernizr.inputtypes.date,
    yep:"js/success.js",
    nope:"js/fail.js",
    complete:function(){
        //this will run after the js files is loaded based on the case

        console.log("the test is complete");

    }




});