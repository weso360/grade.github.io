// Write your function here:
const finalGrade = (num1, num2, num3) => {
    if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
    return 'You have entered an invalid grade.'}
   let sum = (num1 + num2 + num3) / 3;
 
 if(sum <= 59 && sum >= 0){
     return 'F'
   } if(sum <= 69 && sum >= 60){
     return 'D'
   } if(sum <= 79 && sum >= 70){
     return 'C'
   } if(sum <= 89 && sum >= 80){
     return 'B'
   } else if(sum <= 100 && sum >= 90){
     return 'A'
   }
     return sum
 
 }
 console.log(finalGrade(60,90,90))
 
 
 
 
 
 // Uncomment the line below when you're ready to try out your function
 // console.log(finalGrade(99, 92, 95)) // Should print 'A'
 
 // We encourage you to add more function calls of your own to test your code!