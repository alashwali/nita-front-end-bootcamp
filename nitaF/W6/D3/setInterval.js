function IntervalDemo() {
  console.log("Interval Demo Executed");
}
const intervalID = setInterval(IntervalDemo, 2000);
setTimeout(() => {
  clearInterval(intervalID);
  console.log("interval stopped");
}, 7000);
