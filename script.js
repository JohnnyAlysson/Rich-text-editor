var user_text = document.getElementById("user_input");
var button = document.getElementById("boldbtn");
var Isclicked = false;


function turnBold() {
    if(Isclicked)
    {
        document.getElementById("user_input").style.fontWeight = "normal" ;
        Isclicked = false
        document.getElementById("boldbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        document.getElementById("user_input").style.fontWeight = "bold" ;
        Isclicked = true
        document.getElementById("boldbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}
function turnItalic() {
    if(Isclicked)
    {
        document.getElementById("user_input").style.fontStyle = "normal" ;
        Isclicked = false
        document.getElementById("italicbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        document.getElementById("user_input").style.fontStyle = "italic" ;
        Isclicked = true
        document.getElementById("italicbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}
function turnUnderline() {
    if(Isclicked)
    {
        document.getElementById("user_input").style.textDecoration = "none";
        Isclicked = false
        document.getElementById("underlinebtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        document.getElementById("user_input").style.textDecoration = "underline" ;
        Isclicked = true
        document.getElementById("underlinebtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}

function turnUnderline() {
    if(Isclicked)
    {
        document.getElementById("user_input").style.textDecoration = "none";
        Isclicked = false
        document.getElementById("underlinebtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        document.getElementById("user_input").style.textDecoration = "underline" ;
        Isclicked = true
        document.getElementById("underlinebtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}




buttonred.onclick = function () {
    document.getElementById('user_input').style.color = 'red'; //make the color red
};
