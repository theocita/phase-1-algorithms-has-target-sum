function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    const num = target - array[i];
    for(let j = i + 1; j < array.length; j++){
      if (array[j] === num){
        return true
      }
    }
  }
  return false 
 }

/* 
  Write the Big O time complexity of your function here
  The Big O complexity of this function is quadratic time
*/

/* 
  Add your pseudocode here
  take one item from the array
    add them together
    if they add up to the target number then return it
    if nott try again until it does
  
*/

/*
  Add written explanation of your solution here
  the function should take on element and add it to another element

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
