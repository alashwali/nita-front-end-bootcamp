function a() {
  c();
  console.log("a");
}
function b() {
  a();
  console.log("b");
}
function c() {
  console.log("c");
}
b();
