/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = (text) => {
  let obj = {};
  let arr = [];
  let final = [];
  for(let i = 0; i < text.length; i++) {
    if(obj[text[i]] === undefined) {
      obj[text[i]] = 1;
    } else {
      obj[text[i]]++;
    }
  }
  arr = Object.keys(obj);
  for(let i = 0; i < arr.length; i++) {
    final.push([arr[i], obj[arr[i]]]);
  }

  return final;
}