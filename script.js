let heroPho=["pho1.jpg","pho2.jpg","pho3.jpg"];
let heroSec=document.querySelector(".heroSection");
let lftBtn=document.querySelector(".larr");
let rgtBtn=document.querySelector(".rarr");
let heroImg=document.querySelector(".heroImg");
let index=0;
function slider(){
      heroSec.style.backgroundImage=`url(${heroPho[index]})`;
    if(index>=heroPho.length-1){
        index=0;
        heroSec.style.backgroundImage=`url(${heroPho[index]})`;
    }
    else if(index<0){
        index=heroPho.length-1;
        heroSec.style.backgroundImage=`url(${heroPho[index]})`;
    }
}
function left(){
    --index;
    slider();
}
function right(){
    ++index;
    slider();
}
lftBtn.addEventListener("click",left);
rgtBtn.addEventListener("click",right);
document.body.style.backgroundImage = "url('path/to/your/image.jpg')";