//Coding Steps:
//All questions must be printed to your Browser’s console:

//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);


//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//•	Do not use numbers to reference the last element, find it programmatically, 
//•	ages[7] – ages[0] is not allowed!
console.log(ages[ages.length-1] - ages[0]);


//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(38);
console.log(ages[ages.length-1] - ages[0]);


//1c.	Use a loop to iterate through the array and calculate the average age. 
let totalSum = 0
for (let i = 0; i < ages.length; i++) {
  totalSum = totalSum + ages[i];
  }
console.log(totalSum / ages.length);


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = names.reduce(function (sum, name) {
  return sum + name.length;
}, 0);
let averageLetterLength = (totalLetters / names.length);
console.log(averageLetterLength);


//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let concatenated = names[0]
for (let i = 0; i < names.length; i++) {
  concatenated = concatenated.concat(" ", names[i]);
} 
console.log(concatenated);


//3.	How do you access the last element of any array?
// ANSWER: You can access it with the var[var.length-1] property.


//4.	How do you access the first element of any array?
// ANSWER: By using the [] operator with index 0. For example: var[0];


//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths[i] = names[i].length;
}
console.log(nameLengths);


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sum = 0
for (let i = 0; i < nameLengths.length; i++) {
  sum = sum + nameLengths[i];
}
console.log(sum);


//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatenatedWord (word, n) {
  return word.repeat(n);
}
console.log(concatenatedWord ("hola", 5));


//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.
function fullName (firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName ("Abner", "Lopez"));


//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let array1 = [30, 30, 30];
let array2 = [30, 40, 50];
let grandSum = 0

function isSumGreater100 (array) {
  for (let i = 0; i < array.length; i++) {
    grandSum = grandSum + array[i];
  } if (grandSum > 100) {
     return true;
  } else {
    return false;
  }
}
console.log(isSumGreater100 (array2));


//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let total = 0

function totalAverage (arr) {
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]; 
      }
      return total / arr.length;
}
console.log(totalAverage(array1));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function isAverageGreater(arr1, arr2) {
  if (totalAverage(arr1) > totalAverage(arr2)) {
    return true;
  } else {
    return false;
  }
}
console.log(isAverageGreater(array1, array2));


//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink (isHotOutside, moneyInPocket) {
  if (isHotOutside == true && moneyInPocket > 10.50) {
    return true;
  } else {
    return false;
  }
}
console.log(willBuyDrink(true, 12));


//13.	Create a function of your own that solves a problem. 
//•	In comments, write what the function does and why you created it.

// This function takes 2 parameters (bolean and array) to determine if a student is eligible to graduate or not, and will print out the result based on if the student completed his assignments  and if their average test score was 70 or greater using the array allTestScore and the totalAverage function declared prevously above.

let allTestScores = [60, 80, 65, 75, 85];

function willGraduate (isHomeworkDone, testScoresAverage) {
  if (isHomeworkDone == true && totalAverage(testScoresAverage) >= 70) {
    console.log("Congrats! You will graduate!");
  } else {
    console.log("Sorry... You will not be able to graduate.")
  }
}
willGraduate(true, allTestScores);