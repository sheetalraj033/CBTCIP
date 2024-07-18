document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addtodo");
    const todoTableBody = document.getElementById("todoTableBody");
    const timeInput = document.getElementById("timeInput");
    const dateInput = document.getElementById("dateInput");
    const taskInput = document.querySelector('input[type="text"]');

    addButton.addEventListener("click", function() {
        const task = taskInput.value.trim();
        const date = dateInput.value;
        const time = timeInput.value;

        if (task === "" || date === "" || time === "") {
            alert("Please fill out all fields");
            return;
        }

        const newRow = document.createElement("tr");

        const taskCell = document.createElement("td");
        taskCell.textContent = task;
        newRow.appendChild(taskCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = date;
        newRow.appendChild(dateCell);

        const timeCell = document.createElement("td");
        timeCell.textContent = time;
        newRow.appendChild(timeCell);

        const completedCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                newRow.classList.add("completed");
            } else {
                newRow.classList.remove("completed");
            }
        });
        completedCell.appendChild(checkbox);
        newRow.appendChild(completedCell);

        todoTableBody.appendChild(newRow);

        // Clear input fields
        taskInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    });
});
