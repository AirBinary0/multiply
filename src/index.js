module.exports = function multiply(first, second) {
  let col = 0;
  let f_arr = Array.from(first);
  let s_arr = Array.from(second);
  let sum_arr = [];
  for (let i=f_arr.length-1; i>=0; i--) {
    let memory = 0;
    let number = '';
    for (let i=0; i<col; i++) number += "0";
    for (let j=s_arr.length-1; j>=0; j--) {
      let a = Array.from(Number(Number(f_arr[i])*Number(s_arr[j])+memory).toString());
      if (a.length > 1) {number += a[1]; memory = Number(a[0]);}
      else {number += a[0]; memory = 0;}
    }
    if (memory > 0) number += memory.toString();
    sum_arr.push(number);
    col++;
  }
  let result = sum_arr[sum_arr.length-1];
  let memory = 0;
  for (let i=sum_arr.length-2; i>=0; i--) {
    let pre_res = '';
    let sc = sum_arr[i];
    while (sc.length < result.length) sc += "0";
    for (let j = 0; j < result.length; j++) {
      let a = Array.from(Number(Number(result[j])+Number(sc[j])+memory).toString());
      if (a.length > 1) {pre_res += a[1]; memory = Number(a[0]);}
      else {pre_res += a[0]; memory = 0;}
    }
    if (memory > 0) pre_res += memory.toString();
    result = pre_res;
  }
  let ans = Array.from(result).reverse();
  result = '';
  for (let i=0; i<ans.length; i++) result += ans[i];
  return result;
}