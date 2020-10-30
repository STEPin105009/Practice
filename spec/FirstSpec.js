const app=require('../src/math');
describe('Testing a Nodejs Program ', () => {
    it('should give the greeting',()=>{
        const title=app.hello();
        expect(title).toBe("Hello World");
    })

    it('should return true',()=>{
        const res=app.checkForDate(2020,11,5);
        expect(res).toBeTruthy();
    })

    it('should return false',()=>{
        const res=app.checkForDate(2020,16,5);
        expect(res).toBeFalsy();
    })

    it('should give factorial', () => {
        const res=app.factorial(5);
        expect(res).toBe(120);
    });
});