let loggedIn = true;
let UserType = "Editor";

if (loggedIn) {
    console.log("Welcome to the application");
    if (UserType == "Admin") {
        console.log("You have access to admin panel");
    }
    else if (UserType == "Editor") {
        console.log("You have access to editor panel");
    }
    else if (UserType == "Viewer") {
        console.log("You have access to viewer panel");
    }
    else {
        console.log("No Idea Which type of user you are");
    }
}
else {
    console.log("Please login to access the application");
}
