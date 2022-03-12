let KM = "150 000 000 KM";
let MI = "93 205 678 MI";
let KMs = " 77 600 000 KM";
let MIs = "48 218 404 MI";
let swich = 1;
document.getElementById("KM").onclick = function(){
    document.getElementById("P").innerHTML = KM;
}
document.getElementById("MI").onclick = function(){
    document.getElementById("P").innerHTML = MI;
}
document.getElementById("KMs").onclick = function(){
    document.getElementById("P1").innerHTML = KMs;
}
document.getElementById("MIs").onclick = function(){
    document.getElementById("P1").innerHTML = MIs;
}
document.getElementsById ("picturebutton1").onclick = function(){
    swich++;
    if(swich == 5)
    swich = 1;
    if(swich == 2)
    document.getElementsByClassName("firstPicture").innerHTML.src = "neptune.gif";
}