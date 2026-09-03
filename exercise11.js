function getPrimitive(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object') {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(getPrimitive([1, [], undefined, {}, "string", {}, []]));

