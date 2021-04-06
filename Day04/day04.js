let a = prompt("enter the value of A", "");
let b= prompt("Enter the value of B", "");
if(a == b){
    result = "a is equal to b";
}else if(a>b){
    result = "a is greater then b";
    
}else {
    result = "b is greater";
}
(a%2==0)?result = `${a} is divisible by 2`:result = `${a} is not divisible by 2`;
document.getElementById("loop").innerHTML = result;






let marks = prompt("Enter the marks obtained")
switch(true){
    case (marks>=80 && marks<=100):
        result = "Grade Awarded: A";
        break;
    case (marks>=70 && marks<=79):
        result = "Grade Awarded: B";
        break;
    case (marks>=60 && marks<=69):
        result = "Grade Awarded: C";
        break;
    case (marks>=50 && marks<=59):
        result = "Grade Awarded: D";
        break;
    case (marks>=0 && marks<=49):
        result = "Grade Awarded: F";
        break;
    default:
        result="Enter proper marks" ;
}






let month=prompt("enter the month");
switch(true){
    case (month== 'December'||'January'|| 'February'):
        result = "Winter"
        break;
    case (month == 'March'||'April'||'May'):
        result = "Spring"
        break;
    case (month == 'June'||'July'||'August'):
        result = "Summer"
        break;
    case (month == 'September'||'October'||'November'):
        result= "Autumn"
        break;
    default:
        result="none"
}
document.getElementById("loop").innerHTML = result;
