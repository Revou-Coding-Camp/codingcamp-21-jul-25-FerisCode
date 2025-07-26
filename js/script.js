console.log("Hello, World!");

let tasks = [];

function addTask()  {
    // Function to add a new task

    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("todo-date");


   // Check if inputs are empty //
    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please enter a task and a date.");
    } else {
        // Add the task to the tasks array//
        tasks.push({title: taskInput.value, date: dateInput.value});

        console.log("Task added:", taskInput.value, "on", dateInput.value);
        console.log(tasks);

        renderTasks();
    }
}

function deleteTask() {
    // Function to delete a task
    tasks = [];

    renderTasks();
}

function toggleFilter() {
    // Function to toggle the filter
}

function renderTasks() {
    const taskList = document.getElementById("DaftarTodo");
    taskList.innerHTML = ""; // Clear the current list

    tasks.forEach((task, index) => {
      taskList.innerHTML += `
        <li class="todo-item flex justify-between items-center bg-white p-4  mb-2">
                        <span>${task.title} - ${task.date}</span>
                        <div class="todo-actions">
                            <button class="border px-[8px] py-[2px] rounded-[6px] bg-green-500 text-white">Edit</button>
                            <button class="border px-[8px] py-[2px] rounded-[6px] bg-red-600 text-white">Delete</button>
                        </div>
                    </li>
      `;
    });
}