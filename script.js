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

function display(){
  console.log('this function ran');
  const input = document.getElementById('taskBox');
  const toDo = input.Value;
  const textNode = document.createTextNode(toDo);
  // const ul = document.getElementById('list');
  const li = document.createElement('li'); 
  const check = checkBox();
  li.appendChild(check);  
  li.appendChild(textNode);
  ul.appendChild(li);
  const nextLine = document.createElement('br');
  ul.appendChild(nextLine);
}
  
function checkOff(e){
  const toDoItem = e.target.parentElement;
  if(toDoItem.classList.contains("strike")){
     toDoItem.classList.remove("strike");
  }
  else{
     toDoItem.classList.add("strike");
  }
}



























































//   const li = document.getElementById('list');;
//   const submit = document.getElementById('submit');
//   // const check = document.createElement('input');

//   submit.addEventListener('click',checkBox);  
//   submit.addEventListener('click',display);
//   // checkBox.addEventListener('click',strikeThrough);

//   function checkBox(){
//     const check = document.createElement('input');
//     check.setAttribute('type','checkbox');
//     li.appendChild(check);
//     console.log(check); 
//     // if(check.checked=="true"){
//     //   // check.addEventListener('click',strikeThrough);
//     //   li.classList.toggle("strike");
//     if(check.checked){
//       check.addEventListener('click',strikeThrough);
//     }
//   }

// function display(){
//   console.log('this function ran');
//   const input = document.getElementById('task');
//   const toDo = input.value;
//   const textNode = document.createTextNode(toDo);
//   console.log(textNode);
//   li.appendChild(textNode);
//   li.appendChild(document.createElement('br'));
// }

// function strikeThrough(){
//   li.classList.toggle("strike");
// }




  

  


