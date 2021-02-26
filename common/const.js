const a = {
  a: 0,
};

let b = { ...a };

a.a = 1;
a.b = 2;

console.log(a);
console.log(b);
