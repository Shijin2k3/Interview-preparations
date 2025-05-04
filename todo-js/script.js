document.querySelector("#TodoForm").addEventListener("submit",function(e){
    e.preventDefault()
    if(document.querySelector(".todo-input").value.length == 0){
        alert('please enter a task')
    }
    else{
        document.querySelector('.TodoList').innerHTML += `
        <div class="Todo">
             <p id="todo-item">${document.querySelector(".todo-input").value}</p>
             <div class="Todo-action">
             <button class="delete">X</button>
             </div>
        </div>` ;      
         document.querySelector(".todo-input").value =""

         var current_todo =document.querySelectorAll(".delete");
         for(var i=0; i<current_todo.length; i++){
            current_todo[i].onClick =function(){
                this.parentNode.remove();
            }
         }
    }
})

   
   