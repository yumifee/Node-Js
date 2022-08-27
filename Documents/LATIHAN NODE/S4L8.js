//Arrow Function
const square = (x) => {
    return x * x
   }
   console.log(square(2)) // Will print: 4

//Shorthand Syntax
const squareAlt = (x) => x * x
console.log(squareAlt(2)) // Will print: 4

//This Binding
const event = {
    name: 'Jamet Party',
    guestList: ['Surty', 'Siti', 'Santy'],
    printGuestList() {
    console.log('Guest list for ' + this.name)
   
    this.guestList.forEach((guest) => {
    console.log(guest + ' is attending ' + this.name)
    })
    }
   }
   event.printGuestList()