let KM = "4 500 000 000 KM";
let MI = "2 796 170 365 MI";
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
document.getElementById ("picturebutton1").onclick = function(){
    swich++;
    console.log(swich);
    if(swich == 4){
        swich = 1;
    }
    if(swich%3 == 1){
        document.getElementById("firstPicture").src = "neptune_1.jpg";
    }
     if(swich%3 == 2){
        console.log(swich);
        document.getElementById("firstPicture").src = "neptune_2.jpg";
    }
    if(swich%3 == 0){
        document.getElementById("firstPicture").src = "neptun_3.jpg";
    }
    }
   
