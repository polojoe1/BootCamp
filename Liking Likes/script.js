var neilsLike = 9;
var nicks = 12;
var jim = 9;
jimH4=document.querySelector('#Jims');
h4 = document.querySelector("#Neils");
nick = document.querySelector('#Nicks');
function NeilLike(){
    neilsLike++;
    
    h4.innerText = neilsLike+" like(s)";
}

function NickLike(){
    nicks++;
    nick.innerText = nicks +" like(s)";
}

function JimsLike(){
    jim++;
    jimH4.innerText= jim+ " like(s)";
}