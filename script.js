
var user_text = document.getElementById("user_input");
var Isclicked = false;
// tentando criar uma classe para resolver o mudança do botão
// class button { 
//     constructor(){
//         this.clicked = false
//     }
// }
// const dot = "."


function turnBold() {
    if(Isclicked)
    {
        user_text.style.fontWeight = "normal" ;
        Isclicked = false
        document.getElementById("boldbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.fontWeight = "bold" ;
        Isclicked = true
        document.getElementById("boldbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}
function turnItalic() {
    if(Isclicked)
    {
        user_text.style.fontStyle = "normal" ;
        Isclicked = false
        document.getElementById("italicbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.fontStyle = "italic" ;
        Isclicked = true
        document.getElementById("italicbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}
function turnUnderline() {
    if(Isclicked)
    {
        user_text.style.textDecoration = "none";
        Isclicked = false
        document.getElementById("underlinebtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.textDecoration = "underline" ;
        Isclicked = true
        document.getElementById("underlinebtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}

function turnLinetr() {
    if(Isclicked)
    {
        user_text.style.textDecoration = "none";
        Isclicked = false
        document.getElementById("linetrhough").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.textDecoration = "line-through" ;
        Isclicked = true
        document.getElementById("linetrhough").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}

function alingLeft() {
    if(Isclicked)
    {
        user_text.style.textAlign = "none";
        Isclicked = false
        document.getElementById("leftbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.textAlign = "left" ;
        Isclicked = true
        document.getElementById("leftbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}
function alingcenter() {
    if(Isclicked)
    {
        user_text.style.textAlign = "none";
        Isclicked = false
        document.getElementById("centerbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.textAlign = "center" ;
        Isclicked = true
        document.getElementById("centerbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}
function justify() {
    if(Isclicked)
    {
        user_text.style.textAlign = "none";
        Isclicked = false
        document.getElementById("justifybtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.textAlign = "justify" ;
        Isclicked = true
        document.getElementById("justifybtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}
function alingRight() {
    if(Isclicked)
    {
        user_text.style.textAlign = "none";
        Isclicked = false
        document.getElementById("alingRightbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        user_text.style.textAlign = "right" ;
        Isclicked = true
        document.getElementById("alingRightbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}

function list() {
    if(Isclicked)
    {
        Isclicked = false
        document.getElementById("listbtn").style.filter = "none"
    }
    else if( Isclicked = true)
    {
        new_text = splitString(user_text, space);
        user_input = new_text
        Isclicked = true
        document.getElementById("listbtn").style.filter = "drop-shadow(rgb(0, 0, 0) 0.2rem 0.2rem 0.2rem)"
    }
}






buttonred.onclick = function () {
    document.getElementById('user_input').style.color = 'red'; //make the color red
};
