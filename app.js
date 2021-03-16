// 

const boxa = document.getElementById("boxa");
const boxb = document.getElementById("boxb");
const boxc = document.getElementById("boxc");

boxa.addEventListener(`click`,()=>{
    boxb.classList.add("box2");
});
boxc.addEventListener(`click`,()=>{
    boxb.classList.remove("box2");
});



