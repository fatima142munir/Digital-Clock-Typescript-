function dClock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var period = document.getElementById("ampm");
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    if (h > 12) {
        h = h - 12;
    }
    else {
        console.log("Not working");
    }
    if (h == 0) {
        h = 12;
    }
    var ampm = h >= 12 ? "PM" : "AM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
}
setInterval(dClock, 1000);
