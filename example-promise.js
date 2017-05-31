// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Durham', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Durham').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('error')
// });

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Something is not right');
    }
  });
}

addPromise(1, 3).then(function(result) {
  console.log('Yaay the sum is ', result);
}, function(err) {
  console.log(err);
});

addPromise('derrick', 3).then(function(result) {
  console.log('not expected');
}, function(err) {
  console.log(err);
});
