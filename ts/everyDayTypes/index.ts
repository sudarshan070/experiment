// String

let usrName: string = 'Manohar'
let paraLine: string = 'This is the Para line'

//  Number

let five: number = 5
let oneFiveTwo: number = 152

// Boolean

let isValid: boolean = true
let isTrue: boolean = false

// Array

let rollNumber: number[] = [1, 2, 3, 4, 5]
let studentName: string[] = ["Rohit", "Virat", "Jasprit", "Ishan"]

//  Function

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// greet(2)  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
greet('Manmohan')


function getFavoriteNumber(): number {
    return 26;
}

async function getFavoriteNumberOne(): Promise<number> {
    return 26;
}