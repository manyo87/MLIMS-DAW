let checklist = document.querySelector("#checklist");

let buttonSelect = document.querySelector('#Selectall');
let buttonDeselect = document.querySelector('#Deselectall');

for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");

    let textNode = document.createTextNode(getRandomInt(0, 100));

    let label = document.createElement("label");
    label.append(x);
    label.append(textNode);

    li.append(label);

    checklist.append(li);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Selectall() {
    var checkbox = document.querySelectorAll('input[type="checkbox"]')

    for (let i = 0; checkbox.length; i++) {
        checkbox[i].checked = true;

    }
}

function Deselectall() {
    var checkbox = document.querySelectorAll('input[type="checkbox"]')

    for (let i = 0; checkbox.length; i++) {
        checkbox[i].checked = false;

    }

}

    buttonSelect.addEventListener('click', Selectall);
    buttonDeselect.addEventListener('click', Deselectall);


