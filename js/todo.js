const todoNode = document.querySelector("#todo");
const buttonNode = document.querySelector("#button");
var taskCompleted = 0

function showList() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);
            let data = "";
            for (var i = 0; i < response.length; i++) {
                if (response[i].completed == true) {
                    data += `<li class="list-group-item list-group-item-primary">
                       <input id ="checkBox${i + 1}" class="form-check-input me-1" type="checkbox" value="" checked disabled>
                       <i class='bx bx-checkbox-minus'></i>
                       <label>${response[i].title}</label>
                     </li>`;
                } else {
                    data += `<li class="list-group-item list-group-item-secondary">
                    <input id ="checkBox${i + 1}" class="form-check-input me-1" type="checkbox" value="" onchange="checkTodo(${i + 1})">
                    <i class='bx bx-checkbox-minus'></i>
                    <label>${response[i].title}</label>
                  </li>`;
                }
            }
            todoNode.innerHTML = data;
            buttonNode.innerHTML = "";
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}



function checkTodo(num) {
    const checkBoxNode = document.querySelector(`#checkBox${num}`);
    if (checkBoxNode.checked) {
        taskCompleted += 1;
    } else {
        taskCompleted -= 1;
    }
    if (taskCompleted == 5) {
        alert("Congrats. 5 Tasks have been Successfully Completed.");
    }
}