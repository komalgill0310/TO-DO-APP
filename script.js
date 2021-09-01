const ul = document.getElementById('list'); 
const submit = document.getElementById('submit');
const li = document.getElementById('listItem');
// const deleteToDo = document.createElement('button');
// const li = document.createElement('li'); 
// const input = document.getElementById('taskBox');
// const toDo = input.value;
// const cancel = document.getElementById('delete');
// cancel();

submit.addEventListener('click',display);
ul.addEventListener('click',checkOff);
// deleteToDo.addEventListener('click',deleteListItem);

function checkBox(){
  const check = document.createElement('input');
  check.setAttribute('type','checkbox');
  console.log(check); 
  return check;      
}

function cancelTask(){
  const deleteToDo = document.createElement('button');
  deleteToDo.innerHTML = "Delete";
  ul.removeChild(li);
}
  console.log(deleteToDo);
  return deleteToDo;
}

function display(){
  console.log('this function ran');
  const input = document.getElementById('taskBox');
  const toDo = input.value;
  const textNode = document.createTextNode(toDo);
  // const li = document.createElement('li'); 
  // const li = document.getElementById('listItem');
  const check = checkBox();
  li.appendChild(check);  
  li.appendChild(textNode);
  ul.appendChild(li);
  const nextLine = document.createElement('br');
  const deleteToDo = cancelTask();
  li.appendChild(deleteToDo);
  li.appendChild(nextLine);  
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

// function deleteListItem(){
//   ul.removeChild(li);
// }




























































  

  


