const ul = document.getElementById('list'); 
const submit = document.getElementById('submit');

submit.addEventListener('click',display);
ul.addEventListener('click',checkOff);

function checkBox(){
  const check = document.createElement('input');
  check.setAttribute('type','checkbox');
  console.log(check); 
  return check;      
}

function createDeleteButton(){  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class','delete');
  return deleteButton;
}

function deleteToDo(e){
  if(e.target.parentElement.classList.contains('strike')){
    const taskToRemove = e.target.parentElement;
    taskToRemove.remove();
  }
}

function display(){
  console.log('this function ran');
  const input = document.getElementById('taskBox');
  const toDo = input.value;
  const li = document.createElement('li'); 
  const textNode = document.createTextNode(toDo);   
  const nextLine = document.createElement('br'); 
  const check = checkBox();
  const deleteTask = createDeleteButton();
  deleteTask.addEventListener('click',deleteToDo);
  ul.appendChild(li);
  li.appendChild(check);  
  li.appendChild(textNode); 
  li.appendChild(deleteTask);
  li.appendChild(nextLine);  
}
  
function checkOff(e){
  const boxCheck = e.target;
  if(boxCheck.type==="checkbox"){
  boxCheck.checked = !boxCheck.checked;

  if(boxCheck.checked){
    boxCheck.checked = false;
    boxCheck.parentElement.classList.remove("strike");
  }
  else if(!boxCheck.checked){
    boxCheck.checked = true;
    boxCheck.parentElement.classList.add("strike");
  }
  }
}




























































  

  


