const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const countEl = document.querySelector("#count");
const input= document.querySelector("#step");
const reset = document.querySelector("#reset")
let count = 0 ;

btn1.addEventListener("click",()=>{
     let stepValue = Number(input.value)|| 1
    count+=stepValue;
  countEl.innerText = count;
});

btn2.addEventListener("click",()=>{
    let stepValue = Number(input.value) || 1
    count-=stepValue;
   
  countEl.innerText = count;
});

reset.addEventListener("click",()=>{
   count=0 ; 
   countEl.innerText = count; 
  
});
