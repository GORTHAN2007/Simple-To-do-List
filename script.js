const input_task = document.querySelector(".add_tasks_input");
const add_task_button = document.querySelector(".add_tasks_button");
const to_do_list = document.querySelector(".list");

function adding_task(){
    let task = document.createElement("li");
    task.innerHTML = input_task.value;
    task.classList.add("task");
    to_do_list.appendChild(task);
    input_task.value = "";
}

add_task_button.addEventListener("click", adding_task);