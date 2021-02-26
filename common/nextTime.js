// let nextTime = 0

// function change() {
//     nextTime = 1
// }

// change()
// console.log(nextTime);

function frequency(space, callback) {
    let nextTime = 0
    return setInterval(() => {
      let now = new Date().getTime();
      if (now >= nextTime) {
        callback()
        nextTime = now + Math.random() * space
      }
    }, 300)
  }

  frequency(10000, () => {
      console.log('hi');
  })