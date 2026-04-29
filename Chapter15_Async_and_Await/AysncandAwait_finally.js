async function TestAPI3(){
    try {
        let result2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await result2.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
    finally {
        console.log('This will always execute, regardless of success or error.');
    }   
}
TestAPI3();   