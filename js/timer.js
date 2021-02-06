let oldDay, oldhour, oldMin, sec, hours, days, min, now,dy,mn,s,hr;
// let dt = new Date("October 13, 2030 11:13:00");
let dt=new Date();
dm=dt.getMonth()+1;
if(dt.getMonth()>10&&dt.getDay()>10)
document.getElementById("date").defaultValue = dt.getFullYear()+"-"+dm+"-"+dt.getDay();
else if(dt.getMonth()<10&&dt.getDay()>10)
document.getElementById("date").defaultValue = dt.getFullYear()+"-0"+dm+"-"+dt.getDay();
else if(dt.getDay()<10&&dt.getMonth()>10)
document.getElementById("date").defaultValue = dt.getFullYear()+"-"+dm+"-0"+dt.getDay();
else
document.getElementById("date").defaultValue = dt.getFullYear()+"-0"+dm+"-0"+dt.getDay();

// document.getElementById("date").defaultValue = "2021-05-27";
d=dt.getMinutes()+2;h=dt.getHours();
if(d>10&&h>10)
document.getElementById("time").defaultValue = h+":"+d;
else if(d<10&&h>10)document.getElementById("time").defaultValue = h+"-0"+d;
else if(h<10&&d<10)document.getElementById("time").defaultValue ="0"+h+":"+d;
else  document.getElementById("time").defaultValue = "0"+h+":0"+d;



function a() {
  oldDay = new Date(document.getElementById('date').value);
  oldTime = document.getElementById('time').value;
  toString(oldTime);
  oldHour = parseInt(oldTime.slice(0, 2));
  oldMin = parseInt(oldTime.slice(3, 5));

  targetDate = new Date(parseInt(oldDay.getFullYear()), parseInt(oldDay.getMonth()), parseInt(oldDay.getDate()), oldHour, oldMin);
  console.log(targetDate);
document.getElementById('settimer').innerText="Reset Timer";
document.getElementById('h1').innerText="Timer is Running!";

  let clr = setInterval(() => {
    now = new Date();
    let distance = targetDate - now;
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    sec = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("l1").innerHTML = "Days Left";
    document.getElementById("l2").innerHTML = "HH:MM:SS";
    
    if (hours > 10)
    hr=hours;
    if (hours < 10)
    hr="0"+hours;

    if (days > 10)
    dy=days;
    if (days < 10)
    dy="0"+days;

    if (min > 10)
    mn=min;
    else
    mn="0"+min;

    if (sec < 10)
    s="0"+sec;
    else s=sec;
    
      document.getElementById("cont1").innerHTML = dy;
     
    document.getElementById("cont2").innerHTML = hr + ":" + mn + ":" + s;
   if(distance<=11000&&distance>6000)
   {
     var audio=new Audio("http://www.freesoundvault.com/sounds/sound_fx/60minute.wav");
     audio.play();
   }
  //  if(distance<=6000)
  //  {
  //    var audio=new Audio("http://www.freesoundvault.com/sounds/sound_fx/60minute.wav");
  //    audio.play();
  //  }
    
    if (distance <= 0) {
      clearInterval(clr);
      var audio = new Audio('http://onj3.andrelouis.com/phonetones/unzipped/Alcatel%20Idol%20X/ringtones/Woodwork.mp3');
      audio.play();
     
      document.getElementById('h1').innerText="Time's Up!";
      document.getElementById("cont1").innerHTML = "00";
      document.getElementById("cont2").innerHTML = "00:00:00";
      
    }
    settimer.addEventListener('click',function(){
      location.reload();
    })

  }, 1000);
}

