//Functions conver time from firebase
export function timeConvert(UNIX_timestamp) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = UNIX_timestamp.getFullYear();
  var month = months[UNIX_timestamp.getMonth()];
  var date = UNIX_timestamp.getDate();
  var hour = UNIX_timestamp.getHours();
  var min = UNIX_timestamp.getMinutes();
  var sec = UNIX_timestamp.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}
