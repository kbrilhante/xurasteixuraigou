setListeners();

function setListeners() {
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("mouseenter", mouseOverButton);
        button.addEventListener("mouseleave", mouseLeaveButton);
    });
}

function mouseOverButton(e) {
    const i = e.target.children[0];
    i.classList.add("fa-beat-fade");
}

function mouseLeaveButton(e) {
    const i = e.target.children[0];
    i.classList.remove("fa-beat-fade");
}