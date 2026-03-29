const fn=
{
    value:0,
    add (n){
        this.value +=n;
        return this;
    },
    substract(n){
        this.value-=n;
        return this;
    }
}

console.log(fn.add(5).substract(3));
//{value:0,add:[Function:add],substract:[Function:substract]}

