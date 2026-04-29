async function TestAPI(){
    try {
        let result = await Promise.reject('This is an error');
        console.log(result);
    } 
    catch (error) {
        console.error('Error occurred:', error);
    }
}
TestAPI();

async function TestAPI2(){
    try {
        let result = await Promise.resolve('This is a success');
        console.log(result);
    } 
    catch (error) {
        console.error('Error occurred:', error);
    }
}
TestAPI2();

async function TestAPI3(){
    try {
        let result2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await result2.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}
TestAPI3();   