

function a(){
var totalSeconds = 0;
let timerVar=setInterval(countTimer,1000);

 function countTimer() {
  document.getElementById('start').innerHTML='Restart';
        
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds; 
            document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
            
        } 

        start.addEventListener('click',function(){
          
          totalSeconds=0;
          document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        });
      stop_timer.addEventListener('click',function(){
        clearInterval(timerVar); 
       
          document.getElementById('start').innerHTML='Restart';
          start.addEventListener('click',function(){
          totalSeconds=0;
          document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        }, 1000);
      });
      }