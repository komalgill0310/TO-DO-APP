  const submit = document.getElementById('submit');
  submit.addEventListener('click',display);

function display(){
  console.log('this function ran');
  const input = document.getElementById('task');
  const toDo = input.value;
  var t = document.createTextNode(toDo);
  console.log(t);
  const li = document.getElementById('list');
  const result = li.appendChild(t);
  // console.log(result);
}




  

  


