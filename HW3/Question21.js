function getSubset(arr, index) {
  const result = [];
  function combine(start, combo) {
    if (combo.length === index) {
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      combine(i + 1, combo);
      combo.pop();
    }
  }
  combine(0, []);
  return result;
}
