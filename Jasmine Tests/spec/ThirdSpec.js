describe('Testing to Spy upon', () => {
    it('should call multiply func', () => {
        const obj=new mathFn();
        spyOn(obj,"product");
        let match=obj.square(12);
        console.log(match);
        expect(obj.product).toHaveBeenCalled(); 
    });
});