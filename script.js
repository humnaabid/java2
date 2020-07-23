// chapter 39 to 67
//Task 1
// //Q 1
// function myFunction() {
//     var func=   document.getElementById("result").innerHTML = Math.pow(result.value, 2);
    
//        result.value =eval(func)
//      }
//      //Q 2
//      function leap(){
//         var leap=prompt("Enter a year ")
//         if(leap%4==0 && leap%100!=0 || leap%400==0){
//             alert("Its leap year")

//         }
//         else{
//             alert("Its not leap year")
//         }

//      }
//      leap();
//      //Q 3
//      function triangle(a,b,c){
//         do{
           
//            var s1=(a+b+c)/2
//            var S=eval(s1)
//            var area=S*(S-a)*(S-b)*(S-c)
//             var area1=eval(area)
//             alert(area1)
//             break;
//         }
//         while(area!=0);

//      }
//     triangle(4,8,6);
    //Q 4


//     var sub1=+prompt("Enter marks subject 1")
//     var sub2=+prompt("Enter marks subject 2")
//     var sub3=+prompt("Enter marks subject 3")
//     function average(){
//         var average=(sub1+sub2+sub3)/3;
//         eval(average)
//      var avg=  Math.ceil(average)
//         alert("The average of marks is"+avg)
    

//     }
//   function per(){
//     var per=[(sub1+sub2+sub3)*100]/300
//     Math.round( eval(per))
//     alert("The percentage is :"+per+"%")
//   }
//   function main(){
//     per();
//     average();
//   }
//   main();
// //  Q 5
//   var i=prompt("Enter a word")
//     function index(){
//         i>0;
//         while(i!=-1){
//             var j=prompt("Enter a word which you target")
//             var h=i.indexOf(j);
//             alert("The index of "+j+" is :"+h)
//             break;
//         }
//     }
//     index();
//     // Q 6
//     function isVowel() {
//         var c=prompt("Enter a text")
//         if(c.length<25){
//         switch (c ) {
//             case 'a':
//                 return true;
//             case 'e':
//                 return true;
//                 case 'i':
//                 return true;
//             case 'o':
//             return true;
//             case 'u':
//                 return true;}
//         return false;}
//         else{
//             alert("must less than 25")
//         }
//         alert(c)
//     }
//    isVowel();
//    Q 8
//    var km=prompt("Enter distance in km")
//    function meter(){
//    var meter= km*1000
//    alert("The distance in meter is "+meter)

//    }
//    meter();
//    function feet(){
//   var feet=  km*3280.84
//   alert("The distance in feet is "+feet)
    
//    }
//     feet();
//     function inche(){
//         var inches=km*39370.1;
//         alert("The distance in inches is "+inches)

//     }
//     inche();
//     function centimeter(){
//         var centi=km*100000;
//         alert("The distance in centimeter  is "+centi)

//     }
//    centimeter();
// Q 9
 var overtime=prompt("Enter your working hour")
do{ 
    if(overtime<=40){
        alert("The working time must be greater than 40 hour")
}
    else if(overtime>40){
        alert("The working payment is "+overtime*12)
    }
break;
}
while(overtime%40!=0)
// Q 10
var x=prompt("Enter amount with draw")
do{
	do{
	 if	(x%100==0)
		alert("The notes of hundred is"+x/100)
		
	break;
}
while(x%100!=0);
	do{
	if(x%50==0)
	
		alert("The notes of fifty is"+x/50)
		
	break;
	
}
while(x%50!=0);

	do{
	if(x%10==0)
	
		alert("The notes of ten is"+x/10)	
		sum+=x;
		
	break;
	
}
while(x%10!=0);



}
while(x%2!=0);

































   //task 2
   //Q 1
 function link(){
    alert("hello world")
 }

 // Q2
function purchase(){
    alert("Thank you for purchasing")

}
// Q 3
function del1(){
  
    document.getElementById("del1").className = "hidden";
         
}
function del2(){
    document.getElementById("del2").className = "hidden";


}
function del3(){
    document.getElementById("del3").className = "hidden";


}
function del4(){
    document.getElementById("del4").className = "hidden";


}
//Q 4
function changeImage(id,src){
    var image=document.getElementById(id);
    image.src=src;
}
//Q 5
var inc=0;
function start(){
    inc++
    var increase=document.getElementById("increase")
    increase.innerHTML=inc;

}
function pause(){
    inc--
    var increase=document.getElementById("increase")
    increase.innerHTML=inc;

}
function reset(){
    inc=0;
    var increase=document.getElementById("increase")
    increase.innerHTML=inc;

}
//Task 3
// Q 1
function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === " ") {
    alert("Email address required.");
    }
     }
// Q2
function expandLoris() {
     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which    make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of";

    
     document.getElementById("slowLoris").innerHTML = expandedParagraph;
     }
//Q 3
var list=document.getElementById("list");
// list
function addTodo(){
    var item= document.getElementById("todo");
    var li=document.createElement("li")
    var litext=document.createTextNode(item.value)
    li.appendChild(litext)
    
    list.appendChild(li)
    item.value=" ";


    //delete button
    var delbtn=document.createElement("button")
    var deltext=document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    // create edit button
    var edit=document.createElement('button');
    var edittext=document.createTextNode('EDIT');
    edit.appendChild(edittext)
    li.appendChild(edit)
    edit.setAttribute("class","btn")
    edit.setAttribute("onclick","editItem(this)")
  

}

function deleteItem(e){

e.parentNode.remove()

}
function deleteAll(){
list.innerHTML=" "   
}
function editItem(e){
    var value1=e.parentNode.firstChild.nodeValue;
    var editvalue=prompt("Enter edit value",value1)
    e.parentNode.firstChild.nodeValue=editvalue;
}

 // Task 58 to 67
 //task 4
 // Q 1
 //i)
 var d = document.getElementById('main-content');
 //ii)
 var p =document.getElementsByTagName('p');
 //iii)
 for(var i=0; i<p.length; i++){
    var content=p[i].innerHTML
    console.log(content)
 }
//  //iv)
//  var firstname=document.getElementById("firstname");
//  firstname.value="HUMNA";
//  //v)
//  var lastname=document.getElementById("lastname");
//  lastname.value="Abid";
//  //vi)
//  var email=document.getElementById("email");
//  email.value="humnaabid44@gmail.com";

//  // Q 2
//  //i)
//  var node=document.getElementById('form-content')
// document.write (node.parentNode);
// //ii)
// var nod=document.getElementById('lastname')
// var nType = nod.nodeType;
// alert(nType);







