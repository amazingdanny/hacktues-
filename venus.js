let KM = "108 031 958 KM";
let MI = "67 127 946 MI";
let KMs = "61 340 010 KM";
let MIs = "38 100 404 MI";
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
document.getElementById("picturebutton1").onclick = function(){
    swich++;
    if(swich == 4){
    swich = 1;
    }
    if(swich%3 == 1){
        document.getElementById("firstPicture").src = "venus1.jpg";
    }
    if(swich%3 == 2){
        console.log(swich);
    document.getElementById("firstPicture").src = "venus_1.jpg";
    }
    if(swich%3 == 0){
    document.getElementById("firstPicture").src = "venus2.jpg";
    }
}
