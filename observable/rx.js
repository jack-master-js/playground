const { Observable, from, of, Subject } = require("rxjs");
const { map, multicast } = require("rxjs/operators");

//观察对象
// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// const observable = new Observable((subscriber) => {
//   setInterval(() => {
//     subscriber.next("hi");
//   }, 1000);
// });

const observable = of(10, 20, 30);
// const observable = from([10, 20, 30]);

//订阅
// observable.subscribe(
//   (x) => console.log(x),
//   (err) => console.log(err),
//   () => console.log("complete")
// );
// observable.subscribe((v) => console.log(`observerA: ${v}`));
// observable.subscribe((v) => console.log(`observerB: ${v}`));

//操作符
// let operator = map((x) => x * x)(observable);
// operator.subscribe((v) => console.log(`value: ${v}`));
//or
// observable.pipe(map((x) => x * x)).subscribe((v) => console.log(`value: ${v}`));

//广播
const subject = new Subject();

subject.subscribe((v) => console.log(`observerA: ${v}`));
subject.subscribe((v) => console.log(`observerB: ${v}`));

// subject.next(10);
// subject.next(20);
// subject.next(30);
//or
observable.subscribe(subject);

//or multicast
// const multicasted = observable.pipe(multicast(subject));
// multicasted.subscribe((v) => console.log(`observerA: ${v}`));
// multicasted.subscribe((v) => console.log(`observerB: ${v}`));
// multicasted.connect();
