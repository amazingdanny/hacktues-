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
document.getElementById("picturebutton1").onclick = function(){
    swich++;
    console.log(swich);
    if(swich == 4){
        swich = 1;
    }
    if(swich%3 == 1){
        document.getElementById("firstPicture").src = "moon.png";
    }
     if(swich%3 == 2){
        console.log(swich);
        document.getElementById("firstPicture").src = "moon_2.jpg";
    }
     if(swich%3 == 0){
        document.getElementById("firstPicture").src = "moon_3.jpg";
     }
    }
    document.getElementById("picturebutton2").onclick = function(){
        swich--;
        console.log(swich);
        if(swich == 0){
            swich = 3;
        }
        if(swich%3 == 1){
            document.getElementById("firstPicture").src = "moon.png";
        }
         if(swich%3 == 2){
            console.log(swich);
            document.getElementById("firstPicture").src = "moon_2.jpg";
        }
         if(swich%3 == 0){
            document.getElementById("firstPicture").src = "moon_3.jpg";
         }
        }