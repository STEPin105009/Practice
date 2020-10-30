describe('Suite to test classes',()=>{
    let emp=null;
    beforeAll(()=>{
        console.log("This function is executed before any of the operations begin");
    })

    beforeEach(()=>{
        emp=new employee(123,"Aditi","Kolkata");
        console.log("This function is executed before every test case");
    })
    
    afterEach(()=>{
        emp=null;//destroy the emp object
        console.log("This function is executed after every test case");
    })

    afterAll(()=>{
        console.log("This function is the last function to execute of the test suite");
    })

    it('should set id', () => {
        const emp=new employee(123,"Aditi","Kolkata")
        expect(emp.id).toBe(123)
    });

    it('should set name', () => {
        const emp=new employee(123,"Aditi","Kolkata")
        expect(emp.name).toBe("Aditi")
    });

    it('should set address', () => {
        const emp=new employee(123,"Aditi","Kolkata")
        expect(emp.address).toBe("Kolkata")
    });
});

describe('Testing for empmanager',()=>{
    let mgr=null;
    beforeAll(()=>{
        mgr=new Manager();
        mgr.addEmployee(new employee(123,"Gopal","Mumbai"));
        mgr.addEmployee(new employee(125,"Sundar","Mysore"));
        mgr.addEmployee(new employee(126,"Ravi","Bangalore"));
    })
    const func = () => {
        mgr.addEmployee(null);
    };

    it("should not allow undefined values to be added", () => {
        let emp;
        expect(func).toThrow();
    });

    it('should add the emp', () => {
        mgr.addEmployee(new employee(125,"Smita","Mumbai"));
        expect(mgr.employees.length).toBe(4);
        for(const emp of mgr.employees){
            console.log(emp.name);
        }
    });

    //test cases  for updating, removing and getEmployee
    xit('should updateEmpRecord', () => {
       const emp=new employee(123,"Aditi Dutta","Naktala, Kolkata") 
       mgr.updateEmployee(emp)
      // expect(mgr.employees[0].name=="Aditi Dutta")
       //expect(mgr.employees[0].address=="Naktala, Kolkata");
       expect(mgr.employees[0]).toEqual(emp);
    });

    it('should delete a record', () => {
        mgr.removeEmployee(123);
        expect(mgr.employees).not.toContain(new employee(123,"Aditi","Kolkata"));
    });
});

describe('Check for Arrays',()=>{
    it('should check for arrays', () => {
        let arr=[2,3,4];
        expect(arr).toEqual([2,3,4]);
    });

    it('should check for same sequence', () => {
        let arr=[2,3,4];
        expect(arr).not.toEqual([3,2,4]);
    });

    it('arrays should have the exact content', () => {
        let arr=[4,5,6];
        expect(arr.sort()).toEqual([5,6,4].sort());
    });
})
