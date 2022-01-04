// console.log('this is my first js project');
// const tenn=12;
// const five=5;
// t = tenn + five;
// console.log(t);
//
// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);
//
// console.log(Math.max(2, 4, 5, 8));
// console.log(Math.min(2, 4, 5, 8));
//
// let aNumber = Number(prompt('Pick a number: '));
// if (aNumber < 20){
//     console.log('Your number is less than 20!', aNumber);
// }
// else {
//     console.log('Your number is greater than 20', aNumber);
// }
//
// num = 0;
// while (num<=12){
//     console.log(num);
//     num = num + 2;
// }
//
// let result = 1;
// let counter = 1;
// while (counter <= 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);
// console.log(counter);
//
// let yourName;
// do {
// yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);
//
// console.log(Number(586564));
// console.log("thi is the first line\nAnd this is the second");


// for (let num = 0; num<=12; num = num+2){
//   console.log(num);
// }
// var name = 'Atsu';
//     username = String(prompt('Enter a username:'));
//     if (username == name){
//       console.log("Good, you got it,", username);
//     }else{
//       console.log('Name not same as Atsu,',username);
//     };


// TODAY"S DATE 13/12/2021 STUDIES
// let num=20;
// for (num; ; num=num + 1){
//   if (num%7==0){
//     console.log(num);
//     break;

//   };
// for (let number = 0; number <= 7; number = number + 1) {
//   console.log('#');
// }

// for (let num=0; num<=100; num=num+1){
//   if (num%3==0){
//   console.log("Fizz", num);
// }else if(num%5==0){
//   console.log("Buzz", num);
  
// }if(num%3==0 && num%5==0){
//   console.log("FizzBuzz", num);
// }else{
//   console.log("Good");
// }
// }
// Functions in Javascript

// const two=function(x,y) {
//   return x*y
// }
// x=Number(prompt('Enter a number:'))
// y=Number(prompt('Enter a number:'))
// one = two(x,y)
// console.log(one);

// const halve = function(n) {
//   return n / 2;
// }
// let n = 10;
// console.log(halve(20));

// const hummus = function(factor) {
//   const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount*factor;
//     if (ingredientAmount>1){
//       unit+='s';
//     }
//     console.log('${ingredientAmount} ${unit} ${name}');
//   }
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// let launchMissiles = function() {
//   missileSystem.launch("now");
// };
// safeMode='Trigger ready'
//   if (safeMode) {
//   launchMissiles = function() {'do nothing'};
// }
// // You can also decide to call a function before declaring it as seen below
// console.log(launchMissiles);
// console.log(name_(), "is clear");
// function  name_() {
//   return "The future"
  
// }

// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };
// console.log(power(2,6));

// function greet(who) {
//   console.log("Hello " + who);
//   }
//   greet("Harry");
//   console.log("Bye");

// const add = (function () {
//   let counter = 0;
//   return function () {counter += 1; return counter}
// })();

// add();
// add();
// add();
// _________________________________________16/12/2021 3:30pm________________________________-

// function greet(who) {
//     console.log("Hello", who);
// }
// greet("Harry")
// console.log("Bye"); //Result will give you Hello Harry followed by Bye on another line

// function chick(){             //This funtion returns nothing and runs into an infinite loop
//     return egg();
// }function egg(){
//     return chick();
// }
// console.log(chick(), "chick came first");

// function square(x,y) {
//     return x*y;
// }
// console.log(square(2,3,4));

// function multiplier(factor) {
//     return number => number*factor
// }
// let num = multiplier(2)
// console.log(num(3));

// function multi(fac) {
//     return numm=>numm*fac
// }
// let mea = multi(3)
// console.log(mea(4));


//_______________________Recursive funtions______________________________________________________
// function numb1(team) {
//     function numb2(club, cap) {
//         if (club==team){
//             return cap;
//         }else if(club>team){
//             return null;
//         }else{
//             return numb2(club + 1 ,cap * 2)|| //Changing the two(2) will give you the exponent of the no.
//                     numb2(club*2, cap + 1);
//         }
//     }
//     return numb2(1,1);
// }
// for (x=1; x<=11; x+=1){
//     console.log(numb1(x)); //You can either call this side OR
// //-----------------------------------=---------------------------------------------------
// }
// __________Issue a call to this part_______________
// console.log(numb1(1));
// console.log(numb1(2));
// console.log(numb1(3));
// console.log(numb1(4));
// console.log(numb1(5));
// console.log(numb1(6));
// console.log(numb1(7));
// console.log(numb1(8));
// console.log(numb1(9));
// console.log(numb1(10));
// console.log(numb1(11));

// function zeroPad(number, width=3) {
//     let string = String(number);
//     while (string.length < width) {
//     string = "0" + string;
//     }
//     return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows)} Cows`);
//     console.log(`${zeroPad(chickens)} Chickens`);
//     console.log(`${zeroPad(pigs)} Pigs`);
// }
//     printFarmInventory(7, 16, 3);

// _________________20/12/2021 Monday___________________________________

// let listOfNumbers = [2,5,4,8,6];
// console.log(listOfNumbers.length)

// let doh = "Doh";
// a = doh[1].toUpperCase();
// console.log(a);
// console.log(doh.toLowerCase());

// The push method (push() works just like append() in python i.e. for adding objects to a list)
// let numList = [2,1,3];
// a = numList.push(5);
// console.log(a);
// console.log(numList);
// console.log(numList.pop());
// console.log(numList.pop());
// console.log(numList);

// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
    // };
    // console.log(day1.squirrel);
    // console.log(day1.events);
    // → false
    // console.log(day1.wolf);
    // → undefined
    // day1.wolf = false;
    // console.log(day1.wolf);
    // → false

//     let events = {
//         even:'this is even',
//         number:'This is even number'
        
//     }
//     console.log(events);
// console.log(Object.keys({'even':2, 'odd':3}));
// console.log(Object.values({'even':2, 'odd':3}));

// let day1 = {
//     wolf: true,
//     squirrel:false,
//     events:['climb tree', 'running', 'eat fruit']
// }
// console.log(day1.wolf);
// console.log(day1.squirrel);
// console.log(day1.events);
// day1.wolf = false;
// console.log(day1.wolf);
// if (day1.wolf && day1.squirrel==true){
//     console.log(false);
// }else if (day1.wolf || day1.squirrel==false){
//     console.log(true);
// }else{'e don kpaa'};

// let A={a:2, b:3};
// Object.assign(A, {c:4, d:8})
// console.log(typeof A); 
// console.log(A);

// const score = {visitors:0, rooms:0};
// console.log(score.visitors);
// score.visitors=1;
// score.rooms= 1;
// console.log(score);
// for (key in score){
//     console.log(key);
// }
// let arr = [];
// arr[100] = 1;

//     console.log(arr);

// console.log(arr[100]);
// console.log(arr.length); //result is 101 since we have assigned the 100th term to 1,
// any value from 0 to 99 becomes undefined and has a length of 100 hence the 101.

// let journal = [];
// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }
// addEntry(['climb tree', 'running', 'eat fruit'], false)
// addEntry(['climb tree', 'jump to tree', 'eat mushroom'], false)
// addEntry(['climb mountain', 'read a book', 'eat fruit'], true)

// console.log(journal.keys());
// console.log(journal);



// function phi(table) {
//     return (table[3]*table[0]-table[2]*table[1])/
//     Math.sqrt((table[2]+table[3])*
//     (table[0]+table[1])*
//     (table[1]+table[3])*
//     (table[0]+table[2])
//     )
// }
// console.log(phi([76, 9, 4, 1]));

// function addNum(a,b) {
//     return Math.sqrt(a,b);
// }
// console.log(addNum());
// numList = [76, 9, 4, 1];
// for (i in numList){
//     if (numList.includes(9)){
//         console.log(numList[i=0]);
//     }
// }
// n = numList.includes(9)
// console.log(n);

// function max(...nums) {
//     result=-Infinity;
//     for (let num of nums){
//         if (num>result) result=num;
//     }
//     return result;
// }
// console.log(max(2,5,4,8,9,-2)); //this returns the maximum number if the array


// let words = ['never', 'fully'];
// console.log('will', ...words, 'understand'); //

// function PointOnCircle(radius) {
//     let angle = Math.random()*2*Math.PI;
//     return {
//         x:radius*Math.cos(angle),
//         y:radius*Math.sin(angle)
//     };
// }
// console.log(PointOnCircle(2));  //

// let name = {name:'Fareed', age:15}
// console.log(name.name);
// console.log(name.age);


// function phi([n00, n01, n10, n11]) {
//     let a=(n11 * n00 - n10 * n01);
//         b=(Math.sqrt((n10 + n11) * (n00 + n01) *
//         (n01 + n11) * (n00 + n10)));
//         return a/b;
// }
// console.log(phi([2,4,5,6]));

// let word='learn';
// b=word.repeat(2);
// console.log(b);

let total = 0, count = 1;
while (count<=10) {
    total +=count;
    count+=1
}
console.log(total);
 //-----------------------OR--------------------


