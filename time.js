





function displayDate(){
    let time=new Date();
    let year=time.getFullYear();
    let month=time.getMonth() + 1;
    if(month<10){
        month="0"+month
    }
    let date=time.getDate();
    if(date<10){
        date="0"+date;
    }
    let day=time.getDay();
    let currDate=date+ " / " + month + " / "+ year;
    document.getElementById("date").textContent= currDate;
}


setInterval(() => {
    displayDate();
}, 1000);


function displayTime(){
    let time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let sec=time.getSeconds();
    if(sec<10){
        sec="0"+sec;
    }
  
    let currTime=hours + " : " + minutes + " : "  + sec;
    document.getElementById("time").textContent= currTime;
} 



setInterval(() => {
    displayTime();
}, 1000);



