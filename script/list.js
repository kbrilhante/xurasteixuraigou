var list;
const checkedStr = "[1] ";

initialize();

function initialize() {
    list = localStorage.getItem("list").split("\n");
    console.dir(list);
    fillList();
}

function fillList() {
    const divList = document.getElementById("list");
    divList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const isChecked = list[i].includes(checkedStr);
        const item = list[i].replace(checkedStr, "");

        const formCheck = document.createElement("div");
        formCheck.className = "form-check my-2";
        formCheck.onchange = updateList;
        divList.appendChild(formCheck);

        const cBox = document.createElement("input");
        cBox.className = "form-check-input fs-4";
        cBox.type = "checkbox";
        cBox.id = item.replaceAll(" ", "");
        cBox.checked = isChecked;
        cBox.value = i;
        cBox.addEventListener('change', textHandle);
        formCheck.appendChild(cBox);
        
        const label = document.createElement("label");
        label.className = "form-check-label fs-4 fw-bold";
        label.htmlFor = cBox.id;
        label.textContent = item;
        formCheck.appendChild(label);

        changeLabel(cBox.checked, label.classList);
    }
}

function textHandle(e) {
    const cBox = e.target;
    const label = e.target.labels[0];
    // console.log(cBox, label);
    const classes = label.classList;

    changeLabel(cBox.checked, classes);
}

function changeLabel (checked, classes) {
    if (checked) {
        classes.remove("fw-bold");
        classes.add("fw-light");
        classes.add("text-decoration-line-through");
    } else {
        classes.add("fw-bold");
        classes.remove("fw-light");
        classes.remove("text-decoration-line-through");
    }
}

function updateList(e) {
    // console.log(e);
    const index = e.target.value;
    console.dir(e.target.checked);
    if (e.target.checked) {
        list[index] = checkedStr + list[index];
    } else {
        list[index] = list[index].replace(checkedStr, "");
    }
    localStorage.setItem("list", list.join("\n"));
}

function edit() {
    location = "index.html";
}