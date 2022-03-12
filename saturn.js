let KM = "1 400 000 000 KM";
let MI = "869 919 669 MI";
let KMs = "4 300 000 000 KM";
let MIs = "2 671 896 126 MI";
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
    document.getElementsByClassName("venus1picture").innerHTML.src = "neptune.gif";
}