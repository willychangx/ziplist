function zipList(l1, l2) {
  const newArr = [];
  for (let i = 0; i < l1.length; i++) {
    newArr.push(l1[i]);
    newArr.push(l2[i]);
  }
  return newArr;
}

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}

const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
