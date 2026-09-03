function sumDuplicate(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count > 1) {
      result += arr[i];
    }
  }
  return result;
}

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));
