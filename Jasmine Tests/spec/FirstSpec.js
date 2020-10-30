describe('Testing the Math Program',()=>{
    it('adds 2 numbers',()=>{
        const res=addFunc(13,12);
        expect(res).toBe(25);
    })

    it('adds 2 -ve numbers',()=>{
        const res=addFunc(-5,-6);
        expect(res).toBe(-11);
    })

    it("should subtract 2 numbers",()=>{
        const res=subFunc(13,12);
        expect(res).toBe(1);
    })

    it("should return the title of the App",()=>{
        const res=title();
        expect(res).toBe("Welcome to Jasmine training");
    })

    it('should divide 2 numbers', () => {
        const rs=divFunc(13,7);
        expect(rs).toBe('1.86');
    });

    it('should return infinity',()=>{
        const res=divFunc(13,0);
        expect(res).toEqual('Infinity');//Equals is used to check the match of logical equivalence...
    });

    it('should check for number', () => {
        const res=checkNumber('12');
        expect(res).toBeTruthy();
    });

    it('should check for non number', () => {
        const res=checkNumber('apple');
        expect(res).toBeFalsy();
    });
});
