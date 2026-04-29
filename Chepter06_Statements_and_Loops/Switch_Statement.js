//What is Switch Statement?
//Switch statement is used to select one of many code blocks to be executed.
//Syntax:
//switch (expression) {
//  case value1:
//    // code block
//    break;
//  case value2:
//    // code block
//    break;
//  default:
//    // code block
//}
let day=6;

switch (day) {
    case 0:
        console.log("Sunday - Rest day");
        break;
    case 1:
        console.log("Monday - Sprint Planning");
        break;
    case 2:
        console.log("Tuesday - Development");
        break;
    case 3:
        console.log("Wednesday - Code Review");
        break;
    case 4:
        console.log("Thursday - Testing");
        break;
    case 5:
        console.log("Friday - Deployment & Retrospective");
        break;
    case 6:
        console.log("Saturday - Family Time");
        break;
    default:
        console.log("Invalid day");
}
