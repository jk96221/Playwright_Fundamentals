let browser=["Chrome","Firefox","Edge","Safari"];
console.log(browser.length); // 4
console.log(browser[0]); // Chrome

browser.pop(); // Safari
console.log(browser); // [ 'Chrome', 'Firefox', 'Edge' ]

browser.shift(); // Chrome
console.log(browser); // [ 'Firefox', 'Edge' ]

browser.push("Opera");
console.log(browser); // [ 'Firefox', 'Edge', 'Opera' ]

for(let i=0; i<browser.length; i++){
    console.log(browser[i]);
}
// Firefox, Edge, Opera

