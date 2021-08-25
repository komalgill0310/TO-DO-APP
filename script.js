  const li = document.getElementById('list');;
  const submit = document.getElementById('submit');
  // const check = document.createElement('input');

  submit.addEventListener('click',checkBox);  
  submit.addEventListener('click',display);
  // checkBox.addEventListener('click',strikeThrough);

  function checkBox(){
    const check = document.createElement('input');
    check.setAttribute('type','checkbox');
    li.appendChild(check);
    console.log(check); 
    if(check.checked==true){
      // check.addEventListener('click',strikeThrough);
      li.classList.toggle("strike");
    }
  }

function display(){
  console.log('this function ran');
  const input = document.getElementById('task');
  const toDo = input.value;
  const textNode = document.createTextNode(toDo);
  console.log(textNode);
  li.appendChild(textNode);
  li.appendChild(document.createElement('br'));
}

// function strikeThrough(){
//   li.classList.toggle("strike");
// }




  

  


