

function ttime(){
    let date=new Date();
    let b1=document.getElementById('box1');
    let b2=document.getElementById('box2');
    let b3=document.getElementById('box3');
    let b4=document.getElementById('box4');
    let day=date.getDay();
let weekday='';
switch(day){
    case 0:weekday='Sunday';break;
    case 1:weekday='Monday';break;
    case 2:weekday='Tueday';break;
    case 3:weekday='Wednesday';break;
    case 4:weekday='Thursday';break;
    case 5:weekday='Friday';break;
    case 6:weekday='Saturday';
}
    document.getElementsByName('days').innerHTML='ddd';    

    hrs=date.getHours();
    if(hrs>=12){
    b4.innerText="PM";   
    hrs=hrs-12;
    b1.innerHTML=hrs+"<small>&nbspHRS</small>";
    }
    else {
    b1.innerHTML=hrs+"<small>&nbspHRS</small>";
    b4.innerHTML="AM";   
    }
    b2.innerHTML=date.getMinutes()+" <small>&nbspMIN</small>";
    b3.innerHTML=date.getSeconds()+" <small>&nbspSEC</small>";
    requestAnimationFrame( ttime);
}
ttime();