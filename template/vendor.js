// var arr = [["1","2"]];

// 输入
var arr = [["1","2"],["3","4","5"]];

// 期望输出
[["1","3"],["1","4"],["1","5"],["2","3"],["2","4"],["2","5"]]

function permute(arr) {
  const m = arr[0].length
  const n = arr[1].length
  
  const obj = {}
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    for (let j = 0; j < item.length; j++) {
      res.push([item, ])
    }
  }
  for (const item of obj) {
    
  }
  return res
}

console.log(permute(arr))