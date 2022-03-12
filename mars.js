let KM = "228 000 000 KM";
let MI = "141 672 631MI";
let KMs = "54 600 000 KM";
let MIs = "33 926 867 MI";
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