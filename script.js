let numbers= [2, 4, 6, 8, 10]
let numbersSum = numbers[0] + numbers[1] + numbers [2] + numbers[3] + numbers[4]
console.log (numbersSum)
let persons = [
{
    name: "gio",
    age: 28,
    address: "tbilisi"
},
{
    name:"nika",
    age:17,
    address:"tbilisi"
},
{
    name:"luka",
    age:18,
    address:"tbilisi"
}
]
console.log(`my name is ${persons[0].name} I am ${persons[0].age} years old and I live in ${persons[0].address} `)

let index = [0]

if(persons[index].age >19) {
    console.log("you are adult");
}else if(persons[index].age === 18){
    console.log("welcome to the adult's world");
}else {
    console.log("you are too young")
}

switch (persons[index].age) {
    case 18:
        console.log("you are 18 years old");
    break;    
    case 28:
    
        console.log("you are 28 years old");
    break;
    case 17:
        console.log("you are 17 years old");  
        
    default:
        console.log("you are too young");
    break;        
}

const currentDate = new Date().getDay();
console.log(currentDate);

switch (7) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday ")
    break
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
}
let numbersArray =[1, 2, 3, 4, 5, 6, 7, 8, 9,];
let newItem={
    name:"john"
}
let sliceNums = numbersArray.slice(0, 5)
console.log(sliceNums)
numbersArray.push(newItem) // add last element
// numbersArray.pop() // remove last element
numbersArray.shift() // remove last element
numbersArray.unshift(1) // add first element
console.log (numbersArray)

    