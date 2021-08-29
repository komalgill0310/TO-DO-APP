const ul = document.getElementById('list'); 
const submit = document.getElementById('submit');
// const cancel = document.getElementById('delete');
// cancel();

submit.addEventListener('click',display);
ul.addEventListener('click',checkOff);

function checkBox(){
  const check = document.createElement('input');
  check.setAttribute('type','checkbox');
  console.log(check); 
  return check;      
}

function cancel(){
  const deleteToDo = document.createElement('button');
  deleteToDo.innerHTML = "Delete";
  console.log(deleteToDo);
  return deleteToDo;
}

function display(){
  console.log('this function ran');
  const input = document.getElementById('taskBox');
  const toDo = input.value;
  const textNode = document.createTextNode(toDo);
  const li = document.createElement('li'); 
  const check = checkBox();
  li.appendChild(check);  
  li.appendChild(textNode);
  ul.appendChild(li);
  const nextLine = document.createElement('br');
  const deleteToDo = cancel();
  li.appendChild(deleteToDo);
  ul.appendChild(nextLine);
}
  
function checkOff(e){
  console.log("e");
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































































  

  


