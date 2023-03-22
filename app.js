const newTaskForm = document.getElementById("new-task-form");
        const newTaskInput = document.getElementById("new-task");
        const addTaskButton = newTaskForm.querySelector("input[type=submit]");
        const taskList = document.getElementById("task-list");

        // create new task
        function createNewTaskElement(taskText) {
            const listItem = document.createElement("li");
            const taskLabel = document.createElement("span");
            const deleteButton = document.createElement("button");
            const statusSelect = document.createElement("select");

            taskLabel.innerText = taskText;
            deleteButton.innerText = "x";
            deleteButton.classList.add("delete");

            const uncompleteOption = document.createElement("option");
            uncompleteOption.value = "uncomplete";
            uncompleteOption.text = "Uncomplete";

            const inProgressOption = document.createElement("option");
            inProgressOption.value = "in-progress";
            inProgressOption.text = "In Progress";

            const completeOption = document.createElement("option");
            completeOption.value = "complete";
            completeOption.text = "Complete";

            statusSelect.add(uncompleteOption);
            statusSelect.add(inProgressOption);
            statusSelect.add(completeOption);

            statusSelect.classList.add("status-select");

            listItem.appendChild(taskLabel);
            listItem.appendChild(statusSelect);
            listItem.appendChild(deleteButton);

            return listItem;
        }

        // add new task
        function addTask(event) {
            event.preventDefault();
            const taskText = newTaskInput.value.trim();

            if (taskText !== "") {
                const listItem = createNewTaskElement(taskText);
                taskList.appendChild(listItem);
                newTaskInput.value = "";
            }
        }

        // delete task
        function deleteTask(event) {
            if (event.target.classList.contains("delete")) {
                const listItem = event.target.parentNode;
                taskList.removeChild(listItem);
            }
        }

        // update task status
        function updateTaskStatus(event) {
            const listItem = event.target.parentNode;
            const status = event.target.value;

            listItem.classList.remove("uncomplete", "in-progress", "complete");
            listItem.classList.add(status);
        }

        // add event listeners
        newTaskForm.addEventListener("submit", addTask);
        taskList.addEventListener("click", deleteTask);