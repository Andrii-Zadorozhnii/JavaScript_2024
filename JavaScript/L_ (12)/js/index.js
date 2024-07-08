const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ["a", "b", "c", "d", "e", "f"];


// add element to the end of array

console.log(a.length)
console.log(a);
console.log(a.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19));
console.log(a);

console.log(b.push('j', 'e'));
console.log(b);

// delete element from end of array
console.log(b.pop());
console.log(b.pop());
console.log(b);

// delete element from inside of array

delete a[3]; // to effecting on lenght of array
console.log(a);

// splice arrays

a.splice(3, 4, "hi");
console.log(a);

// shift / unshift ->> add or delete from begining of arra