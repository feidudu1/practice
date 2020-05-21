function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}
var hw = helloWorldGenerator();
var a = hw.next();
console.log(a);

// class hi {
//   constructor() {}
//   getname() {
//     console.log("hi");
//   }
// }
