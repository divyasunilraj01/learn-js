// switch statement
// i want to set alarm
// Mon-7am, tue-thu 4am
let day = "Wednesday"

switch (day) {
    case "Monday":
        console.log("Wake up at 7am")
        break;
    case "Tuesday":
        console.log("Wake up at 4am")
        break;
        case "Wednesday":
            console.log("Wake up at 4am")
            break;
    case "Thursday":
        console.log("Wake up at 4am")
        break;
        case "Friday":
        case "Saturday":
        case "Sunday":
            console.log("at9am")
    default:
        console.log("Wake up at 8am")
        break;
}

// temlate literal 
let num1 = 10;
let num2 = 20;
let result = num1 + num2;
// console.log(result);
console.log(`The result is ${result}`);

// concatination

