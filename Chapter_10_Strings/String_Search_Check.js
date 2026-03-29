//includes

let url='https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DLS-SS-MEN-TOP-HEADER-OMU%3ADeal~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&param=128021&BU=LifeStyle';

console.log(url.includes("offer"));
console.log(url.includes("child"));

//startswith and endswith

console.log(url.startsWith("https"));
console.log(url.startsWith("http"));

console.log(url.endsWith("LifeStyle"));
console.log(url.endsWith("https"));

//indexof and lastindexof
console.log(url.indexOf("f"));

console.log(url.lastIndexOf("l"));

//search
console.log(url.search("LifeStyle"));

console.log(url.search(/\d+/));