import { count } from "node:console";

class TestDataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    } 
    
    getFirstItem(): T {
        return this.data[0];
    }
    getItems(): T[] {
        return this.data;
    }

count(): number{
    return this.data.length;
};

}

const stringStorage = new TestDataStorage<string>();
stringStorage.addItem("Hello");
stringStorage.addItem("World");
console.log(stringStorage.getFirstItem()); // Output: "Hello"
console.log(stringStorage.getItems()); // Output: ["Hello", "World"]

const numberStorage = new TestDataStorage<number>();
numberStorage.addItem(42);
numberStorage.addItem(100);

console.log(numberStorage.getFirstItem()); // Output: 42
console.log(numberStorage.getItems()); // Output: [42, 100]
console.log(numberStorage.count()); // Output: 2
console.log(stringStorage.count()); // Output: 2

