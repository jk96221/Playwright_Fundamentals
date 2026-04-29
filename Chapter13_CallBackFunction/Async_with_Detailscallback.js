function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(data); // async callback execution
    }, 2000);
}

fetchData(function(result) {
    console.log("Data received:", result);
});