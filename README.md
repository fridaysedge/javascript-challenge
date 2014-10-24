javascript-challenge
====================

Assets and files for the Essential JavaScript Challenge

TODO

[COMPLETED] Add an event listener for the DOMContentLoaded event raised by the document object.
    -In the event listener function, you will load the state select list and add other event listeners.

[COMPLETED] Load the State Select
    -write the code to load the state select using the state data in the usStates global array.
    -You will need to: create a new <option> element for each state in the array;
    -set the properties of that element appropriately;
    -append that new <option> element as a child of the state select element.

Hide/Show the Occupation Other Input
    -You now need to add the code to show this second field when the user selects 'other', and clear and hide the field when the user selects any other value.

Confirm the "No Thanks" Button
    -code should confirm that the user really wants to leave the page.
    -If the user confirms the action, you should redirect the browser to http://google.com.
    -If the user doesn't confirm, you should stay on the same page.

Validate the Form Before Submit
    -code to validate the form before it is submitted to the server, and stop the submission if the form is invalid.
    -also need to provide adequate feedback to the user about what is invalid so the user can fix the problems.
    -The following validation rules should be enforced:
        -firstName, lastName, address1, city, state, zip, birthdate must have a value. (empty strings are not considered valid.)
        -If the occupation select's value is 'other', the occupationOther field must have a value. (empty strings are not considered valid.)
    -The zip field must be a valid zip code.
    -The user must be 13 years or older to submit the form

If any of the fields do not contain valid values (including the occupationOther when the value of occupation is set to 'other')
    -you should indicate that these are required by adding a 1 pixel solid red (#FF0000 in hex) border to each missing field.
    -the placeholder text should help them realize these fields are required.
        -You can alter the field's borders via your code by:
            -either adding a new style class to the className property (and defining a new rule for that class in the css/main.css file),
            -or by altering the border styling via the field's style property.
            -Regardless of which option you choose, you should clear the red border on fields that now have a valid value the next time your validation code executes.

If the birthdate field indicates that the user is under 13 years of age, you should show a message to the user indicating the the user must be 13 years or older to sign up.
    -I have included a paragraph element next to the birthdate field that you can use to display this message.
    -It has the ID 'birthdateMessage', and you can set the content of the element using the innerHTML property.

Test Form
    -Try entering a few spaces into required fields to make sure you catch that as invalid.
    -Try entering letters into the zip field,
    -Try entering more than 5 digits.
    -Try entering birth dates that would make the user younger than 13
    -Try entering birth dates that would make the user older than 13
    -Try entering birth dates that would make the user exactly 13