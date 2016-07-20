
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject("a and b both need to be numbers");
    }
  });
}

addPromise("a", 2)
.then(function(sum) {
  console.log("resolved sum", sum);
})
.catch(function(err) {
  console.log(err)
});
