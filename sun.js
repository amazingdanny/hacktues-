let swich = 1;
document.getElementById("picturebutton1").onclick = function(){
    swich++;
    console.log(swich);
    if(swich == 4){
        swich = 1;
    }
    if(swich%3 == 1){
        document.getElementById("firstPicture").src = "coolSun.jpg";
    }
     if(swich%3 == 2){
        console.log(swich);
        document.getElementById("firstPicture").src = "sun_2.jpg";
    }
     if(swich%3 == 0){
        document.getElementById("firstPicture").src = "sun_3.jpg";
     }
    }

    document.getElementById("picturebutton2").onclick = function(){
        swich--;
        console.log(swich);
        if(swich == 0){
            swich = 3;
        }
        if(swich%3 == 1){
            document.getElementById("firstPicture").src = "coolSun.jpg";
        }
         if(swich%3 == 2){
            console.log(swich);
            document.getElementById("firstPicture").src = "sun_2.jpg";
        }
         if(swich%3 == 0){
            document.getElementById("firstPicture").src = "sun_3.jpg";
         }
        }