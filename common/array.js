let arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
  item = 1;
});

console.log(arr);

let obj = { name: "paddy" };
let map = new Map();
map.set(1, obj);
map.set(2, 1);
map.set(3, 1);
map.set(4, 1);

console.log(map);
obj.name = "patrick";
console.log(map);
