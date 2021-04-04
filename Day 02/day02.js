// Exercise Level 1 :
let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2))
console.log(challenge.slice(2, ))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies)
console.log(companies.split(','))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let company = 'You cannot end a sentence with because because because is a conjunction'
console.log(company.indexOf('because'))
console.log(company.lastIndexOf('because'))
console.log(company.search('because'))
console.log(company.trim())


// Exercise Level 2 :
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let a = '10'
if(a == 10){
    console.log(a)
}
else {
    aa= parseInt(a)
    console.log(aa)
}

let aaa = 'python'
let b = 'jargon'
console.log(aaa.includes('on'), b.includes('on'))

let c = 'I hope this course is not full of jargon'
console.log(c.includes('jargon'))

console.log(Math.random()*101)
console.log((Math.random()*50)+51)
console.log(Math.random()*256)

//Exercise Level 03 :
console.log('1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125\n')

console.log(company.substr(31,23))
let ac = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let acc = ac.split(' ')
var count =0;
function lov(acc){
  
  for(var i=0;i<acc.length;i++){
    if(acc[i] == 'love'){
      count ++
    }
  }
  
}
lov(acc)
console.log(count)

let euro = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let euro1 = euro.split(' ')
var sum = 0;
var i = 0;
while(euro[i] == 5000|10000|15000){
  sum += euro1[i];
  i++ ;
}
console.log(sum)
