import {todoButton} from "./object.js"
// Body
let myBody = document.body;
//section container
let mySection = document.createElement('section');
myBody.appendChild(mySection);
let contentSection = document.createElement('h1');
contentSection.textContent = 'Ma ToDoList';
contentSection.style.color = 'red';
mySection.appendChild(contentSection);
//1er Div Input & button ADD LIST
let firstDiv = document.createElement('div');
mySection.appendChild(firstDiv);
let myInput = document.createElement('input');
myInput.placeholder = 'Créez votre liste';
firstDiv.appendChild(myInput);
let myButton = document.createElement('button');
myButton.textContent = 'Add List';
firstDiv.appendChild(myButton);
//2eme Div Boutons 
let secondDiv = document.createElement('div');
mySection.appendChild(secondDiv);
//forEach Boutons 'Do' , 'ToDo' & 'All'
todoButton.forEach(element => {
    let myToDoButton = document.createElement('Button');
    myToDoButton.textContent = element.nom;
    myToDoButton.setAttribute('class','invalid');
    secondDiv.appendChild(myToDoButton);
});
//Event
let divToDoList = document.createElement('div');
mySection.appendChild(divToDoList);

myButton.addEventListener('click', ()=>{
    let divToDo = document.createElement('div');
    divToDo.setAttribute('class','invalid');
    divToDoList.appendChild(divToDo)
    let listName = document.createElement('span');
    listName.textContent = myInput.value
    myInput.value = ''
    divToDo.appendChild(listName);
    let divBtnTodo = document.createElement('div');
    divToDo.appendChild(divBtnTodo);
    let frstBtn = document.createElement('button');
    frstBtn.textContent = 'Valid'
    frstBtn.style.backgroundColor = 'green'
    frstBtn.style.color = 'white'
    divBtnTodo.appendChild(frstBtn);
    let scndBtn = document.createElement('button');
    scndBtn.textContent = 'Modif'
    scndBtn.style.backgroundColor = 'blue'
    scndBtn.style.color = 'white'
    divBtnTodo.appendChild(scndBtn);
    let thrdBtn = document.createElement('button');
    thrdBtn.textContent = 'Delete'
    thrdBtn.style.backgroundColor = 'red'
    thrdBtn.style.color = 'white'
    divBtnTodo.appendChild(thrdBtn);
    //
    frstBtn.addEventListener('click', ()=>{
        divToDo.style.backgroundColor = 'lightgreen'
        if (divToDo.className == 'invalid') {
            divToDo.setAttribute('class','valid')
        }else if(divToDo.className == 'valid'){
            divToDo.setAttribute('class','invalid')
            divToDo.style.backgroundColor = 'white'
        }
    })
    
    //
    scndBtn.addEventListener('click', ()=>{
        listName.textContent = prompt('Changez le nom de votre liste')
    })
    //
    thrdBtn.addEventListener('click', ()=>{
        divToDo.remove()
    })
    let elemToDo = Array.from(document.querySelectorAll('div')[1].childNodes);
    elemToDo.forEach(element => {
        
    });
    let elemTodo1 = document.querySelectorAll('button')[1];
    let elemTodo2 = document.querySelectorAll('button')[2];
    let elemTodo3 = document.querySelectorAll('button')[3];
    
    elemTodo1.addEventListener('click', ()=>{
        if (divToDo.className == 'invalid') {
            divToDo.style.display = 'none'
        }
    })
    elemTodo2.addEventListener('click',()=>{
        if (divToDo.className == 'valid') {
            divToDo.style.display =  'none'
        }
    })
    elemTodo3.addEventListener('click',()=>{
        if (divToDo.className == 'valid' || divToDo.className == 'invalid' ) {
            divToDo.style.display = 'flex'
        }
    })
    btnClear.addEventListener('click',()=>{
        divToDoList.remove()
    })
    
})

//3eme Div 'Clear'
let thirdDiv = document.createElement('div');
mySection.appendChild(thirdDiv);
let btnClear = document.createElement('button');
btnClear.textContent = 'Clear All';
thirdDiv.appendChild(btnClear);
