"use strict";
//self-executive anonymus function
//IIFE --Immediately Invoked function Expression
(function(){
    let myFunctionalVariable = 0;

    function Start() {
        console.log(`App Started...${myFunctionalVariable}`);
    }

   window.addEventListener("load", Start);
})();