//u export ur functions..
demo=module.exports={};
demo.hello=()=>{
    return "Hello World";
}

//set of functions to perform basic math operations
demo.addFunc=(a,b)=>a+b;

//create a function to get the factorial of a number
demo.factorial=(num)=>{
    let res=1;
    if(num==0) return res;
    for(let i=2;i<=num;i++)
        res=res*i;
    return res;
}
//create a function that takes 3 values of year,month,day and should return true if its a valid date else false if its not a valid date.
//2019,13,1:Invalid Date
//2020,10,27:Valid Date
//2020,02,31:Invalid Date as 31 does not exist in Feb
demo.checkForDate=(yy,mm,dd)=>{
    let strDate=`${yy}-${mm}-${dd}`;
    const date=Date.parse(strDate);
    return !isNaN(date);
}