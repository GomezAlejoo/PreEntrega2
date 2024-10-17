
const abrirModal = document.querySelector("#mainModal");
const modal = document.querySelector(".modal");
const cerrarModal = document.querySelector(".modal_cerrar");

abrirModal.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.classList.add("modal--show")
})

cerrarModal.addEventListener("click",(e) =>{
    e.preventDefault();
    modal.classList.remove("modal--show") 
})

 
// Array para almacenar las tareas
let tasks = [];

// Constructor para las tareas
function Task(title, description) {
    this.title = title;
    this.description = description;
}

// Función para agregar una nueva tarea al array
function addTaskToList(task) {
    tasks.push(task);
    displayTasks(); // Actualizar la visualización de tareas
}

// Función para mostrar las tareas en el DOM
function displayTasks() {
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        taskCard.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <div class="task-buttons">
                <button class="delete-btn" onclick="deleteTask(${index})">Eliminar</button>
            </div>
        `;

        taskContainer.appendChild(taskCard);
    });
}



// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1); 
    displayTasks(); 
}

// Función para agregar una nueva tarea 
function addNewTask(e) {
    e.preventDefault();

    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

   
    const newTask = new Task(title, description);

    
    addTaskToList(newTask);

   
    document.getElementById("taskForm").reset();
}


document.getElementById("taskForm").onsubmit = addNewTask;

