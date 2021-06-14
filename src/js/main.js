// Body
let myBody = document.body;
//section
let mySection = document.createElement('section');
myBody.appendChild(mySection);
let contentSection = document.createElement('h1');
contentSection.textContent = 'Ma ToDoList';
contentSection.style.color = 'red';
mySection.appendChild(contentSection);
//1er Div
let firstDiv = document.createElement('div');
mySection.appendChild(firstDiv);
let myInput = document.createElement('input');
myInput.placeholder = 'Créez votre liste';
firstDiv.appendChild(myInput);
let myButton = document.createElement('button');
myButton.textContent = 'Add List';
firstDiv.appendChild(myButton);
//2eme Div
