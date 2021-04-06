var txt;
if (confirm("Press a button!")) {
    txt = "You pressed OK!";
}else {
    txt = "You presses Cancel!"
}
document.getElementById("demo").innerHTML = txt;

var person = prompt("Enter your name:", "Harry Potter")
if(person == null || person == ""){
    txt1 = "you cancelled the prompt";
} else {
    txt1 = "Hello" + person + "!How are you!!?" 
}
document.getElementById("demo1").innerHTML = txt1;

const now = new Date()
console.log(now)
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

var firstName = 'Ramesh';
var lastName = 'Rao';
var Country = 'India';
var city = 'Mysore';
var age = 20;
var isMarried ;
var year = 2020;
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
console.log(!(4==='4'))

var txt ;
var l = prompt("Enter length", "");
var w = prompt("Enter width", "")
var area= l*w;
var peri= 2*(l+w);
document.getElementById("demo").innerHTML = area;
console.log(peri)

function slope(x1, y1, x2, y2){
    var m = ((y2-y1)/(x2-x1))
    console.log(m);
}
slope(2,2,6,10)

var Age=prompt("Enter number of years you live", "")
var seconds = Age*365*24*60*60;
    console.log(`You lived ${seconds} seconds`);

    const month = now.getMonth()+1;
    const date = now.getDate();
    const day = now.getDay();
    const hours= now.getHours();
    const minutes=now.getMinutes();
 
    console.log(`${year}/${month}/${date} ${hours}:${minutes}`)
