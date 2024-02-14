var user_text = document.getElementById("user_input");
var button = document.getElementById("boldbtn");
var Isclicked = false;



button.onclick = function turnBold() {
    if(Isclicked)
    {
        document.getElementById("user_input").style.fontWeight = "normal" ;
        Isclicked = false
    }
    else if( Isclicked = true)
    {
        document.getElementById("user_input").style.fontWeight = "bold" ;
        Isclicked = true
    }
}




buttonred.onclick = function () {
    document.getElementById('user_input').style.color = 'red'; //make the color red
};
