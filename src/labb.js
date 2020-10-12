
// modifiera sum() tills testet blir godkänt!
function sum(x,y) {

    let sum = x + y
    return sum

}

function myOwnMultiplyFunction(x,y) {


    let sum = x * y
    return sum

}

function isBelowZero(x) {
    if (x < 0)
     return true
     else {return false} 


}

function round(x) {
  let y = Math.round(x)
  return y
}

function addingUp(number) {
    let summa = 0;

    for (let i = 0; i <= number; i++) {
         summa += i
    }
return summa

}

function findMinMax(array) {

    
   let numbers = {
        min: Math.min(...array),
        max: Math.max(...array)
    }
        return numbers 
}

function afterXmasEve2020 (date) {

    let xmas = new Date('2020-12-24T00:00:00')
    let parsedxmas = Date.parse(xmas)
    let param = Date.parse(date)

    if (param > parsedxmas) return true;
    else { return false}

}

function sortByStringLength (array) {
    array.sort((a, b) => a.length - b.length); 

    return array;
}

function charCounter (letter, sentence) {

 let counter = 0
 
    for (let position = 0; position < sentence.length; position++)
    {
       (sentence[position].toLowerCase() === letter.toLowerCase())? counter++ : null;
    }
    return counter
}

function numbersOnly (arr){
    let newArr = arr.filter(item => typeof item === 'number' && !isNaN(item))
return newArr
}

function sortNumbers (arr, sort) {

    sort === 1 ? arr.sort((a,b) => a-b) : arr.sort((a,b) => b-a)
    return arr

}

function personFactory (first, last) {

   class Person {
     constructor(first, last) {
        this.firstname = first.charAt(0).toUpperCase() + first.slice(1);
        this.lastname = last.charAt(0).toUpperCase() + last.slice(1);
        this.fullname = this.firstname + ' ' + this.lastname;
        this.initials = this.firstname.charAt(0)+"."+this.lastname.charAt(0); 
     }
   }
   const person = new Person(first, last)
   return person

}

function doublePrice(arr) {

    for (let i = 0; i < arr.length; i++) {
        
              arr[i].price = arr[i].price * 2           
          }
          return arr
}

function and (stmt1,stmt2) {
    (stmt1 === stmt2) ? true : false
} 

function removeLeadingTrailing (nmbr) {
    let re = new RegExp(/^0+|^0+\.|\.0+$/g)
    let newnmbr = nmbr.toString().replace(re, '')
    return parseFloat(newnmbr)
}

function getKeysAndValues (obj) {

    let obj2 = {keys: Object.keys(obj), values: Object.values(obj)}
    return obj2

}








//etc...


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript

module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
