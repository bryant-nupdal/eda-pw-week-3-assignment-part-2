console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}
// I needed to change the less than value to be less than 6 instead of 4 to count to 5.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log(i);
}
// I needed to let I equal the starting value and allow it to add 1 to it until it reaches its max (>6) which is 5.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
let even = ['2','4','6','8','10'];
for ( i of even ){
  console.log(i);
}
// I created an array with the even numbers in it and called the numbers by using  a 'for of' to call what is inside the array.

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
let start = 5
const min = 0;
for (let i = 5; i >= min; i-- ){
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (i of stars){
  console.log(i);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
i = 0;
stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']
while (i <= stars.length - 1){
  console.log(stars[i]);
  i++
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let index = 0;
const max = 5;
while (index <= max){
  console.log(index);
  index++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let A = 10;
while ( A >= 5){
  console.log(A);
  A--;
}
