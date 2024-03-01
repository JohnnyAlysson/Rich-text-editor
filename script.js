const textarea = document.getElementById("textarea");


function changeFontFamily(element){
    let value = element.value;
    textarea.style.fontFamily = value;
}
function changeFontSize(element){
    let value = element.value;
    textarea.style.fontSize = value + "px";
}

function turnBold(element){
    if(textarea.style.fontWeight=="bold")
    {
        textarea.style.fontWeight="normal";
        element.classList.remove("active");
    }
    else{
        textarea.style.fontWeight="bold";
        element.classList.add("active");
    }
}

function turnItalic(element){
    if(textarea.style.fontStyle=="italic")
    {
        textarea.style.fontStyle="normal";
        element.classList.remove("active");
    }
    else{
        textarea.style.fontStyle="italic";
        element.classList.add("active");
    }
}

function turnUnderline(element){
    if(textarea.style.textDecoration=="underline")
    {
        textarea.style.textDecoration="none";
        element.classList.remove("active");
    }
    else{
        textarea.style.textDecoration="underline";
        element.classList.add("active");
    }
}

function alignLeft(element){
    textarea.style.textAlign="left"
}
function alignCenter(element){
    textarea.style.textAlign="center"
}
function alignRight(element){
    textarea.style.textAlign="right"
}

function upper(element){
    if(textarea.style.textTransform=="uppercase")
    {
        textarea.style.textTransform="none";
        element.classList.remove("active");
    }
    else{
        textarea.style.textTransform="uppercase";
        element.classList.add("active");
    }
}

function resetStyle(element){
    textarea.style.fontWeight = "normal";
    textarea.style.fontStyle = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontSize = "16px";
    textarea.style.textTransform ="capitalize";
    textarea.value ="";
    textarea.style.color ="#000";
}

function changeColor(element){
    let value = element.value;
    textarea.style.color = value ;
}

function donwloadTxt(element){
    var downloadableLink = document.createElement('a');
    downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea.value));
    downloadableLink.download = "myFile" + ".txt";
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
}