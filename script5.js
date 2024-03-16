function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);

    var editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.classList.add("edit-btn");
    editButton.onclick = function() {
        var newText = prompt("Enter the new task:");
        if (newText !== null) {
            li.firstChild.nodeValue = newText;
        }
    };
    li.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);

    document.getElementById("taskInput").value = "";
}
