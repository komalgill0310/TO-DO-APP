  const li = document.getElementById('list');;
  const submit = document.getElementById('submit');

  submit.addEventListener('click',radioButton);  
  submit.addEventListener('click',display);

  function radioButton(){
    const radio = document.createElement('input');
    radio.setAttribute('type','radio');
    li.appendChild(radio);
    console.log(radio);
    // if(radio.onclick==true){
    //   result.strike();
    }  

function display(){
  console.log('this function ran');
  const input = document.getElementById('task');
  const toDo = input.value;
  const textNode = document.createTextNode(toDo);
  console.log(textNode);
  // const li = document.getElementById('list');
  li.appendChild(textNode);
  li.appendChild(document.createElement('br'));
}

// function checkStrike(){
//   console.log("ran");
//   if(radio.checked==true){
//     strike();}
// }




  

  


