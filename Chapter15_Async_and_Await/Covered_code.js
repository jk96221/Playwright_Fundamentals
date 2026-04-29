function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

async function runLoginFlow() {
    const browser = await openBrowser();
    console.log(browser);

    const loginPage = await goToLogin();
    console.log(loginPage); 

    const credentials = await enterCredentials();
    console.log(credentials);

    const loginResult = await clickLogin();
    console.log(loginResult);
}
runLoginFlow();