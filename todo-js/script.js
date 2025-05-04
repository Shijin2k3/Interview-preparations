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

         const current_todo =document.querySelectorAll(".delete");
         current_todo.forEach((button) => {
            button.addEventListener("click", function () {
                this.closest(".Todo").remove(); // Remove the closest parent with class "Todo"
            });
        });
        const todoItems = document.querySelectorAll("#todo-item");
        todoItems.forEach((item)=>{
            item.addEventListener("click",function(){
                this.classList.toggle("completed")
                if(this.classList.contains("completed")){
                    this.style.textDecoration ="line-through"
                }
                else{
                     this.style.textDecoration ="none"
                }
            })
        })
        }
    }
)

   























   