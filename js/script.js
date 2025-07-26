console.log("Hello, World!");

let tasks = [];
let currentFilter = 'all';

function addTask()  {
    // Function to add a new task

    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("todo-date");


   // Check if inputs are empty //
    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please enter a task and a date.");
    } else {
        // Add the task to the tasks array//
        tasks.push({title: taskInput.value, date: dateInput.value, completed: false});

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

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("DaftarTodo");
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (currentFilter === 'uncompleted') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'today') {
        const today = new Date().toISOString().split('T')[0];
        filteredTasks = tasks.filter(task => task.date === today);
    }

    filteredTasks.forEach((task) => {
        const realIndex = tasks.indexOf(task);
        const doneClass = task.completed ? 'line-through text-gray-400' : '';
        const statusBadge = !task.completed
            ? '<span class="bg-yellow-400 text-white px-2 py-1 rounded text-xs mr-2">Uncompleted</span>'
            : '<span class="bg-green-500 text-white px-2 py-1 rounded text-xs mr-2">Completed</span>';

        taskList.innerHTML += `
            <div class="flex items-center mb-2">
                ${statusBadge}
                <span class="mr-4 ${doneClass}">${task.title} - ${task.date}</span>
                ${!task.completed
                    ? `<button class="bg-green-500 text-white px-4 py-2 rounded mr-2" onclick="completeTask(${realIndex})">Complete</button>`
                    : ''
                }
                <button class="bg-red-600 text-white px-4 py-2 rounded" onclick="deleteSingleTask(${realIndex})">Delete</button>
            </div>
        `;
    });
}

// Tambahkan fungsi deleteSingleTask jika belum ada
function deleteSingleTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}