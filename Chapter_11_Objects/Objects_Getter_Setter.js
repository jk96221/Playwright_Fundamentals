const user=
{
    firstName:"Narasimharao",
    lastName:"Savaneesu",
    get fullName()
    {
        return this.firstName +this.lastName;
    },
    set fullName(value)
    {
          [this.firstName,this.lastName]=value.split(" ");
    }
}

console.log(user.fullName);
user.fullName="Anusha Kuncha";
console.log(user.fullName);