const input_task = document.querySelector(".add_tasks_input");
const add_task_button = document.querySelector(".add_tasks_button");
const to_do_list = document.querySelector(".list");

function adding_task(){
    if(input_task.value.trim() === ""){
        input_task.value = "";
        return;
    }
    let task = document.createElement("li");
    task.innerHTML = `${input_task.value} <span><button class="complete_task"><i class="fa-solid fa-check"></i></button> <button class="delete_task"><i class="fa-solid fa-trash-can"></i></button></span>`;
    task.classList.add("task");
    to_do_list.appendChild(task);
    input_task.value = "";
}

function deleting_task(event){
    const our_target = event.target;
    if (our_target.classList.contains("delete_task")){
        our_target.parentElement.parentElement.remove();
    }

}

add_task_button.addEventListener("click", adding_task);
to_do_list.addEventListener("click", deleting_task);
