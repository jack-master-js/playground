const { Observable, from, of, Subject } = require("rxjs");
const { map } = require("rxjs/operators");

// const observable = new Observable((subscriber) => {
//   setInterval(() => {
//     subscriber.next("hi");
//   }, 1000);
// });

const observable = of(10, 20, 30);
// const observable = from([10, 20, 30]);

// observable.subscribe(
//   (x) => console.log(x),
//   (err) => console.log(err),
//   () => console.log("complete")
// );

//no
// let operator = map((x) => x * x)(observable);
// operator.subscribe((v) => console.log(`value: ${v}`));
//yes
observable.pipe(map((x) => x * x)).subscribe((v) => console.log(`value: ${v}`));

//广播
