var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

function currentDateTime() {
    var box1 = document.getElementById('box1')
    var box2 = document.getElementById('box2')
    var box3 = document.getElementById('box3')
    var box4 = document.getElementById('box4')
    var currentdatetime = new Date()
    // Time
    var hours = currentdatetime.getHours();
    var minutes = currentdatetime.getMinutes();
    var seconds = currentdatetime.getSeconds();
    var meredian = "AM"

    // Date
    var year = currentdatetime.getFullYear();
    var month = currentdatetime.getMonth();
    var day = currentdatetime.getDate();

    // append zero when hours minutes and seconds digits are single

    if (hours >= noon) {
        meredian = 'PM';
    }
    if (hours > noon) {
        hours = hours - noon;
    }
    if (hours == 0) {
        hours = hours + noon;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (month < noon) {
        month = month + 1;
    }

    box1.innerHTML = '<h3>460</h3>'
    box2.innerHTML = '<h3>' + hours + '</h3>'
    box3.innerHTML = '<h3>' + minutes + '</h3>'
    box4.innerHTML = '<h3>' + seconds + '</h3>'

};
setInterval(currentDateTime, 1000)

function show(eid, currelement ) {
    var parent = document.getElementById(eid)
    if (parent.classList.contains('d-none')) {
        parent.classList.remove('d-none');
    }
   if(currelement != undefined){
    var current = parent.getElementsByClassName('active')
    current[0].classList.remove('active')
    currelement.classList.add('active') 
   } 
}


function hide(elid) {
    var x = document.getElementById(elid).children;
    for (var i = 0; i < x.length; i++) {
        if (x[i].classList.contains('active')) {
            x[i].classList.remove('active')
        }
    }
    x[0].classList.add('active')
    document.getElementById(elid).classList.add('d-none');
}


