let KM = "778 000 000 KM KM";
let MI = "483 426 787 MI";
let KMs = "588 000 000 KM";
let MIs = "365 366 261 MI";
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
    document.getElementById("firstPicture").src = "jupi.jpg";
    }
    if(swich%3 == 2){
        console.log(swich);
        document.getElementById("firstPicture").src = "jupiter_2.jpg";
    }
    if(swich%3 == 0){
        document.getElementById("firstPicture").src = "jupiter_3.jpg";
    }
}

document.getElementById("picturebutton2").onclick = function(){
    swich--;
    console.log(swich);
    if(swich == 0){
        swich = 3;
    }
    if(swich%3 == 1){
        document.getElementById("firstPicture").src = "jupi.jpg";
    }
     if(swich%3 == 2){
        console.log(swich);
        document.getElementById("firstPicture").src = "jupiter_2.jpg";
    }
     if(swich%3 == 0){
        document.getElementById("firstPicture").src = "jupiter_3.jpg";
     }
    }