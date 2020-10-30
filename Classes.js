//Syntax of creating Classes in js with ES6 version
class employee{
    constructor(id,name,address) {
        this.empId=id;
        this.empName=name;
        this.empAddress=address;
    }

    display(){
        alert("The Id is "+this.empId);
        alert("The Name is "+this.empName);
        alert("The Address is "+this.empAddress);
    }
}

const empObj=new employee(123,"Aditi","Kolkata");
console.log(empObj);//Object
console.log(JSON.stringify(empObj));//Data in string format..