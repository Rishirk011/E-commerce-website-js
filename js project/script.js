let heroPho=["pho1.jpg","pho2.jpg","pho3.jpg"];
let heroSec=document.querySelector(".heroSection");
let lftBtn=document.querySelector(".larr");
let rgtBtn=document.querySelector(".rarr");
let heroImg=document.querySelector(".heroImg");
let index=0;
function slider(){
      heroSec.style.backgroundImage=`url(${heroPho[index]})`;
    if(index>heroPho.length-1){
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
let nav=document.querySelector(".nav");

let obsArr=[lftBtn,rgtBtn,nav];
let int=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
}

)
obsArr.forEach(x=>{
    int.observe(x);
})
