
//Task 1 chapter 21 to 25
//Q 1
// var st1=prompt("Enter first name")
// var sec2=prompt("Enter second name")
// var full=st1+" "+sec2;
// alert("Hello"+" "+full)
//Q 2
// var phone=prompt("Enter you favourite model of phone")
// {
//   document.write("<h1>"+"My favourite phone is:"+phone+"<br>")
//   document.write("lenght of strings is"+"="+ phone.length+"</h1>"  )
// }
//Q 3
// var pak= "pakistani";
// var n= pak.indexOf("n")
// {
//   document.write("<h2>"+"string :"+pak+"<br>"+"indexof 'n' is : "+n+"</h2>")
// }
// Q4
// var last= "Hello world";
// var l= last.lastIndexOf("l")
// {
//   document.write("<h2>"+"string :"+last+"<br>"+"last indexof 'l' is : "+l+"</h2>")
// }
// Q 5
var pak1= "pakistani";
var i= pak1.charAt(3)
{
  document.write("<h2>"+"string :"+pak1+"<br>"+"chracter at index 3 is : "+i+"</h2>")
}
//Q 6
// var st2=prompt("Enter first name")
// var sec3=prompt("Enter second name")
// var full1=concat(st2+sec3)
// alert("Hello"+" "+full1)

//Q7
var cit="Hyderabad";
var rep=cit.indexOf('Hyder');
var firsttext=cit.slice(0,rep)
var repla='Isalm';
var repl=cit.slice(rep+5)
{
  document.write("<h1>city :"+cit)
  document.write("<h1> "+"Replacing city :"+firsttext+repla+repl+"</h1>")
}
//Q 8
var message = "Ali and Sami are best friends They play cricket and football together";
var newText = message.replace(/and/g, "&");
{
  document.write("<h2>"+"TEXT :"+message+"</h2>")
document.write("<h2>"+" Replacing TEXT :"+newText+"</h2>")

}
//Q 9
var num="472";
var num2=Number(472);
{
  document.write("<h2>"+" value :"+num+"<br>"+"string :"+num2+"</h2>")

}
//Q 10
var pea="peanuts";
var pea1=pea.toUpperCase();
{
  
  document.write("<h2>"+" Text :"+pea+"<br>"+"uppercase :"+pea1+"</h2>")
}
//Q11

var input="javascript";
var input1=input.slice(0,1);
var in2=input.slice(1);
firstchar= input1.toUpperCase()
sechar= in2.toLowerCase()
var Title= firstchar + sechar

{
  
  document.write("<h2>"+" Users input :"+input+"<br>"+"Title case :"+Title+"</h2>")
}
//Q 12
var num4=35.36;
var string=num4.toString();

{
  
  document.write("<h2>"+" value :"+num4+"<br>"+"string :"+string+"</h2>")
}
//Q 13
// var name2=prompt("Enter a username")
// if(name2=="!"|| "@"||"$" ||".") 
// {
//   alert("please Enter a valid name")

// }
// else{
//   alert("WElcome")
// };
//Q 14
// var items =prompt("Welcome mam/sir what want you order")
// var array= ["cake", "apple pie", "cookie", "chips", "patties"]
// items = items.toLowerCase();
// var bak=array.indexOf(items)
// if (array.indexOf(items) !=-1){
//   alert(items+" "+"is available at index"+" "+bak+" "+"in our bakery");
// }
// else {
//   alert(items +" "+"is not available in our bakery")
// }
// Q 16
// IAM NOT UNDERSTAND SPLIT METHOD
// var university = 'University of karachi'
// university=university.toLowerCase()
// {
//   document.write(university.slice(0,11)+"<br>"+university.slice(11,13)+"<br>"+university.slice(13))
// }

// //Q 17
// var users="pakistan"
// var lastchrac=users.charAt(users.length-1);
// {
//    document.write("<h1>"+"user input :"+users+"<br>"+"last character :"+lastchrac+"</h1>")
// }
// // Q 18
// var text1="The quick brown fox jumps over the lazy dog";
// text1=text1.toLowerCase();
// var occur= (text1.split("the").length - 1)
// {
//   document.write("<h2>"+"Text :"+text1+"<br>"+"The occurence of 'the' is :"+occur+"</h2>")
// }
// //Q 15
// var user=prompt("enter your password")
// var user1=user.charCodeAt>65 || user.charCodeAt<122
// var user2 =user.charCodeAt()
// if(user===user1 && use!=Number ){
//   alert("Enter password: 123cmad")
// }

// // else if (user2 !==-1){
// //   alert("password can not begin with number")
// // }
// else if(user.valueOf.length>6){
//   alert("password.value.length")
// }
// //task 2
// //Q 1
// var number1=3.1424;
// var ceil=Math.ceil(number1)
// var floor=Math.floor(number1)
// var round=Math.round(number1)
// {
//   document.write("<h1>"+"Number ="+number1+"<br>"+"ceil ="+ceil+"<br>"+"floor ="+floor+"<br>"+"RoundOff ="+round+"</h1>")
// }
// //Q 2
// var number2=prompt("Enter a negitive float number")
// var ceil1=Math.ceil(number2)
// var floor1=Math.floor(number2)
// var round1=Math.round(number2)
// {
//   document.write("<h1>"+"Number ="+number2+"<br>"+"ceil ="+ceil1+"<br>"+"floor ="+floor1+"<br>"+"RoundOff ="+round1+"</h1>")
// }
// //Q 3
// var absolute=prompt("Enter a number")
// var abs=Math.abs(absolute)
// {
//   document.write("<h1>"+"Number ="+absolute+"<br>"+"absolute ="+abs+"</h1>")
// }
// //Q 4
// var dice=Math.random()
// var dice1=Math.ceil(dice*6)
// {
//   document.write("<h1>"+"The dice of random value is "+dice1+"</h1>")
// }
// //Q 5
// var coin=Math.random()
// var coin1=Math.ceil(dice*2)
// if(coin1===1)
// {
//   document.write("<h1>"+"Head "+coin1+"</h1>")
  
// }
// else if(coin1===2){
//   document.write("<h1>"+"Tails "+coin1+"</h1>")
// }
// //Q 6
// var radom=Math.random()
// var radmon1=Math.floor(radom*100)
// {
//   document.write("<h1>"+"The random value between 1 to 100: "+radmon1+"</h1>")
// }
// //Q7
// var weight=+prompt("Enter you weight")
// var weight1=Math.random(weight)
// var weight2=Math.floor(weight1*50)
// {
//   document.write("<h1>"+"The weight is : "+weight2+"</h1>")
// }

// //Q8
// var value1=Math.random()
// var value2=Math.ceil(value1*10)
// var enter=+prompt("Enter secret number 1 to 10")
// if(enter===value2){
//   alert("Congratulation you find ")
// }
// else if (enter!= value2){
//   alert("Try again")
// }
// else(
//   alert("please right a number")
// )
// task 3
//Q1
var rightNow = new Date();
{

  document.write("<h1>"+rightNow+"</h1>")
}
// Q 2
 var monthNames = ["jan", "Feb", "mar", "April", "May", "June", "July","August","sep"];
 var now = new Date();
 var themonth = now.getMonth();
 var nameOfToday = monthNames[themonth];{
 document.write("<h1>"+"current month :"+themonth+"</h1>")
 }
 // Q 3
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now1 = new Date();
 var theDay = now1.getDay();
 var nameOfday = dayNames[theDay];
 {
 document.write("<h1>"+"Today is :"+nameOfday+"</h1>")
 }
 // Q4
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now1 = new Date();
 var theDay = now1.getDay();
 var nameOfday = dayNames[theDay];
 if(nameOfday=="sun"||nameOfday=="sat"){
   document.write("Its Fun day")
 }
 else(
   document.write("<h1>working days!</h1>")
 )
 //Q 5
 var date= new Date();
 var date1=date.getDate();
 if(date1<=15){
   document.write("<h1>First fifteen days of month</h1>")
 }
 else{
  document.write("<h1>last fifteen days of month</h1>")
 }
 //Q 6
 var mili=new Date();
 var mills= mili.getTime();
 {
  document.write("<h1>"+"mili seconds since 1 Jan 1970 :"+mills+"</h1>")
 }
 //Q 7
 var mili=new Date();
 var mills= mili.getTime();
 {
  document.write("<h1>"+"min seconds since 1 Jan 1970 :"+mills/6000+"</h1>")
 }
 // Q 8
  var d1 = new Date();
var d2=d1.getHours();
if(d2<12){
  document.write("<h1>Its Am</h1>")
}
else if(d2==12){
  document.write("<h1>Its noon</h1>")
}
else{
  document.write("<h1>Its pm</h1>")
}
// Q 9
var laterdate=new Date("June 30, 2020");
{
document.write("<h1>"+laterdate+"</h1>")
}
//Q 10
var ramadan=new Date("June 18 2015");
var ramazan=ramadan.getTime();
var ramazan1=new Date();
var ramazan2=ramazan1.getTime();
var diff=ramazan2-ramazan;
var accu=Math.floor(diff/(1000*60*60*24))
{
document.write("1st ramadan from 18 june 2015 is :"+accu)
}
//Q 11
// var date2=new Date("Dec 5, 2015");
// var date4=new Date();
// var date3=date4.getTime("Dec 5, 2015");

// {
// document.write("<h1>"+"on Reference of :"+date2+"<br>"+"seconds :"+date3/100+"</h1>")
// }
//Q 12
// var current1=new Date();
// var today1=new Date();
// today1.setHours(20);

// {
//   document.write("<h1>"+"current date:"+current1+"<br>"+"1 hour ago :"+today1+"</h1>")
// }
// // Q13
// var current2=new Date();
// var today2=new Date();
// today2.setFullYear(1920);

// {
//   document.write("<h1>"+"current date:"+current2+"<br>"+"100 year ago :"+today2+"</h1>")
// }
// // Q 14
//  var msDiff = new Date().getTime() - new Date(prompt("Enter your age ","May 8 2002")).getTime();
//  var daysTill = Math.floor(msDiff / (1000 * 60 * 60 * 24*30*12));
//  var birthyear= new Date(2020);
//  var diff1=birthyear-daysTill;
//  {
//   document.write("<h1>"+"your age is : "+daysTill+"<br>"+"your birth year is :"+diff1+"</h1>")
// }
// // Q 15
// {
//   document.write("<h1>K-Electric Bill")
// }
// var customer="Abc name";
// var dat=new Date();
// var unit=416;
// var charge=19;

// {
//   document.write("<h2> customer name :"+customer+"<br>"+"Month :"+"february"+"<br>"+"Number of units :"+ unit+"<br>"+"Charges per unit :"+charge+"</h2>")
// }
// {
//   document.write("<h2> Net Amount payable :"+unit*charge+"<br>"+"late payment surcharge :"+350+"<br>"+"Gross Amount Payable (after Due Date) :"+6910)
// }
//Task 4
// Q 1
// function currentDate(){
//   var newdate=new Date();
//   alert(newdate)
// }
// currentDate()
//Q2
// function greet(a,b,){
//   var a=prompt("Enter first name");
//   var b=prompt("Enter a last name");
 
//   alert("Hello "+a+" "+b)
// }
// greet("a ","b");
//Q 4
// function add(A1,B1){
//   var A1=+prompt("Enter a number")
//   var B1=+prompt("Enter second number")
//   var z=A1+B1;
//   return z;
// }
// var Z1=add("A1","B1");
// alert("sum of :"+Z1)
//Q 5
// function cal(numb1,operator,numb2){
//   var numb1=+prompt("Enter first number")
//   var operator=prompt("Enter operator number")
//   var numb2=+prompt("Enter second number")
//   if(operator=="+"){
//     alert(numb1+numb2)
//   }
//   else if(operator=="-"){
// alert(numb1-numb2)

//   }
//   else if(operator=="/"){
//     alert(numb1/numb2)
    
//       }
//       else if(operator=="*"){
//         alert(numb1*numb2)
        
//           }
//           else if(operator=="%"){
//             alert(numb1%numb2)
          
//           }
//           else{
//             alert("Enter correct operator")
//           }
          
// }
// var calcu=cal("numb1","operator","numb2")
// alert(calcu);
// Q 6
// function square(a9){
//   var a9=prompt("Enter a number for square")
//   var square=a9*a9;
//   alert(square)
// }
// square();
// Q 7
// function factorial(){
//   var facts=1;
//   var fac=prompt("Enter a number for factorial")
//   for(i=fac;  i>0; i-- ){
//    var facts=facts*i;
//   }
//   alert("the factroial of number is :"+facts)
// }
// factorial();
// Q 8
// function count(){
//   var start=+prompt("Enter start number")
//   var end=prompt("Enter end number")
//   while(start!=end){
//     if(start>end){
//       start
//       start--;
//     }
//     else if(start<end){
//       start
//       start++;
//     }
//     document.write("<h1>"+start+"</h1>");
//   }
  
// }
// count();
// Q 10
// function area(a,b){
//   alert("The area of rectangular is :"+a*b)
// }

// area(2,6)
// // Q 11 
// function checkPalindrom(palindrom)
// {

//     for( var i = palindrom.length; i > 0; i-- )
//     {
//         if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
//         {
//             document.write('the word is palindrome.');
//         }else{
//             document.write('the word is not palindrome!');
//         }
//     }
// }
// checkPalindrom("<h1>"+"eye"+"</h1>");

//q 12
// function tring(){
//   var word = "Web Development tutorial"
//   for( i=0;i<word.length;i++){
//     for(j=0;j<word.length;j++){
//         if(word[i].length()>=word[j].length()){
//            if(word[j].length()>=rts.length()) {
//               rts=word[j];
//            }
//         } else if(word[i].length()>=rts.length()){
//            rts=word[i];
//         }

//     }
// }
// }
// tring();
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("the quick brown fox"));

