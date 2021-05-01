
<SCRIPT LANGUAGE="JavaScript">

<!-- Begin
day = new Date();
miVisit = day.getTime();
function clock() {
dayTwo = new Date();
hrNow = dayTwo.getHours();
mnNow = dayTwo.getMinutes(); 
scNow = dayTwo.getSeconds();
miNow = dayTwo.getTime();
if (hrNow == 0) {
hour = 12;
ap = " AM";
} else if(hrNow <= 11) {
ap = " AM";
hour = hrNow;
} else if(hrNow == 12) {
ap = " PM";
hour = 12;
} else if (hrNow >= 13) {
hour = (hrNow - 12);
ap = " PM";
}
if (hrNow >= 13) {
hour = hrNow - 12;
}
if (mnNow <= 9) {
min = "0" + mnNow;
}
else (min = mnNow)
if (scNow <= 9) {
secs = "0" + scNow;
} else {
secs = scNow;
}
time = hour + ":" + min + ":" + secs + ap;
document.form.button.value = time;
self.status = time;
setTimeout('clock()', 1000);
}

document.write("<form name=\"form\">"
+ "<input type=button"
+ " name=button ></form>");
onError = null;
clock();
// End -->
</SCRIPT>
