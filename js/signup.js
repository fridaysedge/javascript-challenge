/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

"use strict";


/* onReady()
* Called when the DOM is loaded and ready for manipulation.
*
* */
function onReady() {
	// Declare variables
    var signUpForm = document.getElementById('signup');
    var stateSelect = signUpForm.elements['state'];
	var cancelButton =document.getElementById('cancelButton');
    var idx;
    var option;
	
	/* Load the State Select */	
    for(idx = 0; idx < usStates.length; ++idx){
    	option = document.createElement('option');
        option.innerHTML = usStates[idx].code + ' - ' +usStates[idx].name;
        option.value = usStates[idx].code;
        stateSelect.appendChild(option);
    }
	
	// Hide/Show the Occupation Other Input
    signUpForm.addEventListener('change', function(){
    	var occupation = document.getElementById('occupation').value;
		var occupationOther = document.getElementById('occupationOther');
		
		// was the change event from "other" being selected?
		if(occupation == 'other'){
			// if true then show the "other" input
			occupationOther.style.display = 'block';
		}else{
			// otherwise, hide the "other" input
			occupationOther.style.display = 'none';
		}
    });
	
	// Confirm the "No Thanks" Button
    cancelButton.addEventListener('click', function(){
        if(window.confirm('Are you really sure you want to leave?')) {
            window.location = "http://google.com";
        }
	});
	
	// Validate the Form Before Submit see javascript-forms example
	signUpForm.addEventListener('submit', onSubmit);
}

/* *
 * onSubmit() is called when the user attempts to submit the form.
 * If form fields are invalid, the form will not be submitted.
 * */
function onSubmit(eventObject) {
    eventObject.returnValue = validateForm(this);
    if (!eventObject.returnValue && eventObject.preventDefault) {
        eventObject.preventDefault();
    }
    return eventObject.returnValue;
} 

/* *
* validateForm() validates the required form fields, returns true for invalid input
* */
function validateForm(form) {
	// Declare variables
    var requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state', 'zip', 'birthdate'];
    var idx;
    var formValid = true;


    // Has the "occupation other" input been selected?
    if(document.getElementById('occupationOther').style.display == 'block'){
		// if true, push occupationOther onto the required fields array
    	requiredFields.push('occupationOther');
    }

    // Parse the required fields
    for(idx = 0; idx < requiredFields.length; ++idx){
        formValid &= validateRequiredField(form.elements[requiredFields[idx]]);
    }

    return formValid;
} 

/* *
* validateRequiredField() validates a required field. Checks if field does not have a value
* or only spaces.
* */
function validateRequiredField(field) {
    var errorMsg = '';
    // Trim any spaces from the end of the input
    var value = field.value.trim();
    // Check if there is input
    var valid = value.length > 0;

    // Is this a birthdate?
    if(valid && field.name == 'birthdate'){
        // if true, validate the age
        valid = validateBirthDate(value);
        
        // Is the birthdate valid?
        if(!valid){
            // If not, then create a message that can be added to the base invalid message
            errorMsg = ' (Must be 13 years or older to submit)';
        }
    }

    // Is this a zip code?
    if(valid && field.name == 'zip'){
        // if true, validate the zip code
        valid = validateZip(value);
    }

    // is the field valid?
    if(valid){
        // If true, modify the field to reflect its validity
        validFieldDisplay(field);
        return valid;
    }else{
    	// Otherwise, the field is invalid, modify the field to reflect that
        errorFieldDisplay(field, errorMsg);
        return valid;
    }
} 

/* *
 * validFieldDisplay() takes in a field "f" and modifies it to reflect its valid or initial state
 * */
function validFieldDisplay(f) {
    // Is this a birth date field?
    if(f.name == 'birthdate'){
        // If true, set the special <p> tag to initial state
        document.getElementById('birthdateMessage').innerHTML = '';
        f.style.border = '1px solid #CCCCCC';
    }else{
        // Otherwise, set the field to its initial state
        f.style.border = '1px solid #CCCCCC';
    }
} 

/* *
 * errorFieldDisplay() takes in a field "f" and a message 'msg', then modifies it to reflect its invalidity
 * */
function errorFieldDisplay(f, msg) {
    // Is this a birthdate field?
    if(f.name == 'birthdate'){
        // If true, the message needs to be in the special <p> tag
        document.getElementById('birthdateMessage').innerHTML = 'please enter a valid ' + f.name + msg;
        f.style.border = '1px solid #FF0000';
    }else{
        // Otherwise, Modify the border and the placeholder text of the field
        f.value = ''; // Clear the field value so it doesn't override the placeholder
        f.style.border = '1px solid #FF0000';
        f.placeholder = 'please enter a valid ' + f.name;
    }
}

/* *
 * validateBirthDate() takes in a birth date and checks if it is valid
 * */
function validateBirthDate(bDay) {
    // Find out what todays date is
    var today = new Date();
    // Convert the users input into a readable date format
    var dob = new Date(bDay);
    // Determine the difference
    var yearsDiff = today.getFullYear() - dob.getUTCFullYear();
    var monthsDiff = today.getMonth() - dob.getUTCMonth();
    var daysDiff = today.getDate() - dob.getUTCDate();
    // Compensate time difference
    if(monthsDiff < 0 || (0 === monthsDiff && daysDiff < 0)) {
        yearsDiff--;
    }

    // Is the user to young to submit form?
    if(yearsDiff < 13){
        // If true, return false
        return false;
    }

    // Otherwise, it's a valid birthdate
    return true;
} 

/* *
 * validateZip() takes in a zip code and checks if it is valid
 * */
function validateZip(zipCode) {
    // Declare the Regular Expression
    var zipRegExp = new RegExp('^\\d{5}$');
    // Does the zip code match the expression?
    if(!zipRegExp.test(zipCode)){
        // If not, return false
        return false;
    }
    // Otherwise, it's a valid zip code
    return true;
} 

// Event listener for the DOMContentLoaded event raised by the document object
document.addEventListener('DOMContentLoaded', onReady);
