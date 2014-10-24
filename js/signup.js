/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";


/* onReady()
* Called when the DOM is loaded and ready for manipulation.
*
*
* */
function onReady() {
	// Declare variables
    var signupForm = document.getElementById('signup');
    var stateSelect = signupForm.elements['state'];
    var idx;
    var option;

    for(idx = 0; idx < usStates.length; ++idx){
    	option = document.createElement('option');
        option.innerHTML = usStates[idx].code + ' - ' +usStates[idx].name;
        option.value = usStates[idx].code;
        stateSelect.appendChild(option);
    }

    signupForm.addEventListener('change', function(){
    	var occupationOther = document.getElementsByName('occupationOther');
    	occupationOther.style.display = 'block';

    });


}

document.addEventListener('DOMContentLoaded', onReady);
