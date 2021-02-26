const data = JSON.stringify(['a','b'])
const buf = Buffer.from(data);

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
// console.log(buf.toString());
// console.log(buf.toJSON());

// for (const b of buf) {
//     console.log(b);
// }

const arr = Uint8Array.from(buf)
const buf2 = arr.buffer
console.log(buf2);
console.log(buf2.byteLength);
const dv = new DataView(buf2)
console.log(dv.getUint8(0));