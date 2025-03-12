//declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//Create a li element that will hold each entry's chapter title and an associated delete button
const li = document.createElement('li');
//Populate the li element variable's textContent or innerHTML with the input value
li.textContent = input.value;

//Create a delete button
const deleteButton = document.createElement('button');
deleteButton.ariaLabel = "Remove Alma 5";
//Populate the button textContent with a ❌
deleteButton.textContent = '❌';

//Append the li element variable with the delete button
li.append(deleteButton);
//Append the li element variable to the unordered list in your HTML.
list.append(li);