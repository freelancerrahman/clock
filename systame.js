let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let digit = document.getElementById("digit");
let date = document.getElementById("date");

let dateObj;
let hourTime;
let minTime;
let secTime;
var count = 0;
var deg=0;
const optionsForLocalDateString={weekday:"long",year:"numeric",month:"long",day:"numeric"};

setInterval(()=>{
  //This is an "Aroow function"

  dateObj  = new Date();
  hourTime = dateObj.getHours();
  minTime = dateObj.getMinutes();
  secTime = dateObj.getSeconds();

  if(hourTime>12){
    hourTime-=12;
  }
  else if(hourTime==0){
    hourTime=12;
  }

  digit.innerHTML=`<h1>${hourTime} : ${minTime} : ${secTime}</h1>`;

  second.style.transform=`rotate(${secCount()}deg)`;

  function secCount(){
    deg=(secTime*6);
    if(deg==360){
      deg=0;
    }

    return deg;
  }


  minute.style.transform=`rotate(${minCount()}deg)`;

  var countForMin=6;
  function minCount(){
    deg=(minTime*6);
    if(deg==360){
      deg=0;
    }

    return deg;
  }

  hour.style.transform=`rotate(${hourCount()}deg)`;

  function hourCount(){

    deg=(hourTime*30);
    if(deg==360){
      deg=0;
    }

    return deg;
  }

  date.innerHTML=`<h1>${dateObj.toLocaleDateString(undefined,optionsForLocalDateString)}</h1>`;
},1000);
