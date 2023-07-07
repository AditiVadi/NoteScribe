
// dom
// document object model
//console.dir(document);//js mo hoy a aape
//console.log(document);//html ma hoy a aape 
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const edit = document.createElement('button');
//let items = document.getElementById("myid");
//let editItem = null;

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
            <button class="todo-btn edit">Edit</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
   
  //if (e.target.classList.contains("edit")) { 
   // const lised = e.target.parentNode.previousElementSibling.textContent;
    //lised.pop();
    //console.log(lised);

    //todoToEdit = e.target.closest('newLi'); //edytujemy nablizsze li do przycisku (wiadomka B-) )
    //todoInput.value = todoToEdit.firstChild.textContent; //przypisujemy do inputa (edytora) wartosc ktora mielismy w child (tekst) elementu li 
    //popup.style.display = 'flex';
    if (e.target.classList.contains("edit")) {
      document.getElementById("").value =
          e.target.parentNode.childNodes[0].data;
      submit.value = "EDIT";
      editItem = e;
  }
}

);
  