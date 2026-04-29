//Constant

const config={browser:"Chrome",timeout:4000};
console.log(config);
//Modifying Properties -- ALLOWED

config.browser="Firefox";
config.timeout=6000;
config.retries=10;

console.log(config);

config={browser:"Safari"};

//Let

let config1={browser:"Chrome",timeout:4000};
console.log(config1);
//Modifying Properties -- ALLOWED

config1.browser="Firefox";
config1.timeout=6000;
config1.retries=10;

console.log(config1);

config1={browser:"Safari"};

console.log(config1);
