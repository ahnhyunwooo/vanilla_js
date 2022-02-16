const clockTitle = document.querySelector(".js-clock");
function deadline() {
  const christmas = endDaySetting();
  const today = new Date();
  if(today.getMonth() === 12 && today.getDay() >= 25) {
    christmas.setFullYear = today.getFullYear+1;
  }
  let differenceDay = Math.ceil((christmas.getTime() - today.getTime())/(1000*60*60*24));
  let differenceHour = -today.getHours();
  let differenceMin =  -today.getMinutes();
  let differenceSecond = -today.getSeconds();
  if(differenceSecond < 0) {
    differenceMin -= 1;
    differenceSecond +=60;
  }
  if(differenceMin < 0) {
    differenceHour -= 1;
    differenceMin += 60;
  }
  if(differenceHour < 0) {
    differenceDay -= 1;
    differenceHour += 24;
  }
  differenceHour = String(differenceHour).padStart(2, "0");
  differenceMin = String(differenceMin).padStart(2, "0");
  differenceSecond = String(differenceSecond).padStart(2, "0");
  clockTitle.innerText = `${differenceDay}d ${differenceHour}h ${differenceMin}m ${differenceSecond}s`;
}
function endDaySetting() {
  const date = new Date();
  date.setHours(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setMonth(11);
  date.setDate(25);
  return date;
}
deadline();
setInterval(deadline, 1000);