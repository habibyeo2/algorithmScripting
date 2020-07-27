function sumAll(arr) {
    var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
}
return sum;
}
sumAll([1, 4]);



function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
    return result;
  }
  


  function uniteUnique(...arrays) {
    const flatArray = [].concat(...arrays);
    return [...new Set(flatArray)];
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);