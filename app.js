let presentbox;
const array=[".box1",".box2",".box3"];
const colorbox=[".boxa",".boxb"]
const newarray = array.map((id)=>{
    return document.querySelector(id)  
});


newarray.forEach((element)=>{
    element.addEventListener(`click`,(e)=>{
        collerfiller(e.target)
    })
});

function collerfiller(presentboxid) {
     presentbox = presentboxid
     colorbox.map((id)=>document.querySelector(id))
     .forEach((ele)=>ele.addEventListener(`mouseenter`,(e)=>{
        presentbox.style.backgroundColor = window.getComputedStyle(e.target).backgroundColor
     }))
};