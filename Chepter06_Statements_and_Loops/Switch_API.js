let responsecode = 404;

switch (responsecode) {
    case 200:
        console.log("Working fine");
        break;
    case 404:
        console.log("Page not found");
        break;
    case 500:
        console.log("Internal server error");
        break;
    default:
        console.log("Unknown response code");
}        