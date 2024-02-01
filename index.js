// DOM - Document Object Model
   // ? The Document Object Model (DOM) is a programming interface for web documents. 


// 4 Pillars of DOM :
  // 1.Selection of an element ---
  // 2.Changing HTML ---
  // 3.Changing CSS ---
  // 4.Event Listener ---

// 1 : Selection of an element = document means html and querySelector is any query of html
/*
let a=document.querySelector("h1")
console.log(a);
*/

// 2 : changing html
  // innerHTML for change the html text
/*
a.innerHTML="Changed HTML"
console.log(a);
*/

// 3 : changing css
   // here style for the changing css properties
/*
a.style.color="blue"
a.style.backgroundColor="black  "
console.log(a);
*/

// 4 : Event Listener
  // by clicking on a text on the browser this give us output which we print  in the function

/*
a.addEventListener("click",()=>{
  a.innerHTML="badal gaya mai bhi mere ex ki tarah";
  a.style.backgroundColor="green"
  console.log("this is true");
});
*/

// 5 : ***** clicking bulb glow program *****

let b=document.querySelector("button")
let c=document.querySelector("#bulb")
let flag=0

b.addEventListener("click",()=>{

  if(flag==0){
      c.style.backgroundColor="yellow"
      console.log("yes bulb is glow");
      flag=1
  }
  else{
      c.style.backgroundColor="transparent"
      console.log("now bulb is of");
      flag=0
  }
})

// 6 : ***** selecting multiple events at a single time *****

// for select all elements we use querySelectorAll
let h=document.querySelectorAll("h1")
console.log(h);

// for print all h1 we use forEach for loop
h.forEach(function(e){
  console.log(e);
})


// 7 : SetTimeOut

// textContent for the change only text in the html
c.textContent="hello"