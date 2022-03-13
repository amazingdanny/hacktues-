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
document.getElementById ("picturebutton1").onclick = function(){
    swich++;
    if(swich == 4){
    swich = 1;
    }
    if(swich%3 == 1){
    document.getElementById("firstPicture").src = "mars.jpg";
    }
    if(swich%3 == 2){
        console.log(swich);
        document.getElementById("firstPicture").src = "mars_2.jpg";
    }
     if(swich%3 == 0){
        document.getElementById("firstPicture").src = "mars_3.jpg";
     }
}