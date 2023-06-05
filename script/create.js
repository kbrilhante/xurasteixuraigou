initialize();

function initialize() {
    const list = localStorage.getItem("list");
    if (list) {
        document.querySelector("textarea").value = list;
    }
}

function create() {
    const list = document.querySelector("textarea").value;
    if (list) {
        console.log(list);
        localStorage.setItem("list", list);
        location = "checklist.html";
    }
}

function del() {
    const list = document.querySelector("textarea");
    list.value = "";
    localStorage.removeItem("list");
}
