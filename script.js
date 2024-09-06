const textarea = document.getElementById("textarea");
const toggleModeBtn = document.getElementById("toggleMode");

function changeFontFamily(element) {
    textarea.style.fontFamily = element.value;
}

function changeFontSize(element) {
    textarea.style.fontSize = `${element.value}px`;
}

function toggleStyle(element, style, value) {
    if (textarea.style[style] === value) {
        textarea.style[style] = "";
        element.classList.remove("active");
    } else {
        textarea.style[style] = value;
        element.classList.add("active");
    }
}

function turnBold(element) {
    toggleStyle(element, "fontWeight", "bold");
}

function turnItalic(element) {
    toggleStyle(element, "fontStyle", "italic");
}

function turnUnderline(element) {
    toggleStyle(element, "textDecoration", "underline");
}

function alignText(alignment) {
    textarea.style.textAlign = alignment;
    document.querySelectorAll('.toolbar button[onclick^="align"]').forEach(btn => {
        btn.classList.remove("active");
    });
    document.querySelector(`.toolbar button[onclick="align${alignment.charAt(0).toUpperCase() + alignment.slice(1)}()"]`).classList.add("active");
}

function alignLeft() {
    alignText("left");
}

function alignCenter() {
    alignText("center");
}

function alignRight() {
    alignText("right");
}

function upper(element) {
    toggleStyle(element, "textTransform", "uppercase");
}

function resetStyle() {
    textarea.style = "";
    textarea.value = "";
    document.querySelectorAll(".toolbar button").forEach(btn => btn.classList.remove("active"));
    document.getElementById("fontFamily").value = "Arial";
    document.getElementById("fontSize").value = "16";
}

function changeColor(element) {
    textarea.style.color = element.value;
}

function downloadTxt() {
    const text = textarea.value;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "richtext.txt";
    a.click();
    URL.revokeObjectURL(url);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}


if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

toggleModeBtn.addEventListener("click", toggleDarkMode);

document.querySelectorAll(".toolbar button").forEach(btn => {
    btn.addEventListener("click", () => {
        if (!btn.classList.contains("active") && !btn.getAttribute("onclick").startsWith("align")) {
            btn.closest(".toolbar").querySelectorAll(`button:not([onclick^="align"])`).forEach(b => b.classList.remove("active"));
        }
    });
});

document.getElementById("fontSize").value = parseInt(getComputedStyle(textarea).fontSize);

textarea.addEventListener("input", () => {
    document.getElementById("fontSize").value = parseInt(getComputedStyle(textarea).fontSize);
});