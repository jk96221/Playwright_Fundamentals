function makecounter(start=0)
{
    let count=start;  //this varaiable is closed over.

    return {
        increament() { count++; },
        decrement() {count--;},
        get() {return count;}

    }
}

let counter =makecounter(3);
counter.increament();
counter.increament();
counter.increament();
console.log(counter.get());
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.get());

