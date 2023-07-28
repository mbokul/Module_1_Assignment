// !Module 1 Assignment

/* 
    ? (1) Topic: Online Store Discount Calculator (If-Else Statement) 
*/

function calculateDiscount(purchaseAmount) {
   var discountAmount = 0;

   if (purchaseAmount >= 50 && purchaseAmount <= 100) {
      discountAmount = (5 * purchaseAmount) / 100;
   } else if (purchaseAmount >= 100 && purchaseAmount <= 200) {
      discountAmount = (10 * purchaseAmount) / 100;
   } else if (purchaseAmount > 200) {
      discountAmount = (15 * purchaseAmount) / 100;
   } else {
      discountAmount;
   }

   console.log(
      `Discount Amount: $${discountAmount}\nDiscounted Price: $${
         purchaseAmount - discountAmount
      }\nTotal Amount: $${discountAmount + purchaseAmount}`
   );
}

calculateDiscount(405);

/* 
    ? (2) Topic: Filter Even Numbers 
*/

function filterEvenNumbers(arrayOfNumbers) {
   var filteredNumber = arrayOfNumbers.filter(num => num % 2 == 0);
   console.log(`Filtered Even Numbers:`, filteredNumber);
}

filterEvenNumbers([12, 33, 45, 22, 34, 57, 64]);

/* 
   ? (3) Topic: Multiplication Table Generator
*/

function generateMultiplicationTable(num) {
   for (var i = 1; i <= 10; i++) {
      console.log(`${i} * ${num} = ${i * num}`);
   }
}

generateMultiplicationTable(19);

/* 
   ? (4) Topic: Grade Calculator (JavaScript Switch Case)
*/

function calculateGrade(mark) {
   var grade;
   switch (true) {
      case mark >= 90:
         grade = 'A';
         break;
      case mark >= 80 && mark < 90:
         grade = 'B';
         break;
      case mark >= 70 && mark < 80:
         grade = 'C';
         break;
      case mark >= 60 && mark < 70:
         grade = 'D';
         break;
      default:
         grade = 'F';
   }

   console.log(`Your grade is ${grade}`);
}

calculateGrade(90);
