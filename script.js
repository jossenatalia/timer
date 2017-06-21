function countdown() {
  var timeNow = new Date();

  var day = timeNow.getDate();
  var month = timeNow.getMonth() + 1;
  var year = timeNow.getFullYear();

  var hour = timeNow.getHours();
  if (hour < 10) hour = '0' + hour
  var minute = timeNow.getMinutes();
  if (minute < 10) minute = '0' + minute
  var second = timeNow.getSeconds();
  if (second < 10) second = '0' + second

  document.getElementById('time').innerHTML = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;

  setTimeout('countdown()', 1000);
}
