export default function getTime(time) {
  let milSecs = time % 10;
  let secs = ~~(time / 10);
  let mins = ~~(secs / 60);
  let hours = ~~(mins / 60);
  secs %= 60;
  mins %= 60;
  hours %= 60;
  return `${dispTime(hours)}:${dispTime(mins)}:${dispTime(secs)}.${milSecs}`;
}

function dispTime(num) {
  return ("0" + num).slice(-2);
}