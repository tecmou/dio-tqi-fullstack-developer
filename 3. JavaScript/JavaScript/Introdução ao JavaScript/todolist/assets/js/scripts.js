var inputTaskText = document.getElementById("inputTask").value;
var addTaskButton = document.getElementsByName("addTask")[0];
addTaskButton.addEventListener("click", function() {
    addTask(inputTaskText);
}, false);

function addTask(text) {
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    var span = document.createElement("span");
    span.innerHTML = text;

    var checkItem = document.createElement("div");
    checkItem.setAttribute("class", "checkItem");
    checkItem.appendChild(checkbox);
    checkItem.appendChild(span);

    var checkList = document.getElementById("taskList");
    checkList.appendChild(checkItem);
}
