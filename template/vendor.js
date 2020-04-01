var a = 1293
function convert(money){
  const num = '2344334';
  const arr = [...num].reverse();
  const res = arr.join('').replace(/([0-9]{3})/, (i) => `${i},`);

  console.log([...res].reverse().join(''));
}
var b = convert(a)