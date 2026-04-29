console.log("Playwright".length);

console.log("admin,editor,viewer".split(","));

console.log(["chromium", "firefox"].join(" | "));

console.log("locator".slice(0, 4));

console.log("fail fail".replace("fail", "pass"));

//You have `const texts = [" Login ", "Checkout ", " Profile"];`. Which expression best normalizes them for assertion?
const texts = [" Login ", "Checkout ", " Profile"];
console.log (texts.map(text => text.trim().toLowerCase()));
//Output: [ 'login', 'checkout', 'profile' ]

