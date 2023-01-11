describe('Test functionality', ()=>{

    describe('Test pow number', ()=>{
    
        it('Should wort', ()=>{
            assert.equal(4, numberOperations.powNumber(2))
        });
        it('Should wort', ()=>{
            assert.equal(0, numberOperations.powNumber(0))
        });
        it('Should wort', ()=>{
            assert.equal(100, numberOperations.powNumber(10))
        });
    
    
    });
    describe('numberChecker', ()=>{
    
        it('Should wort', ()=>{
            expect(() => numberOperations.numberChecker('NotNormal')).to.throw('The input is not a number!');
        });
        it('Should wort', ()=>{
            expect(() => numberOperations.numberChecker('abv')).to.throw('The input is not a number!');
        });
        it('String input should throw an error! ', function () {
            let str = 'Test';
            assert.throw(() => numberOperations.numberChecker(str), 'The input is not a number!');
        });
        
        it('Showld work', ()=>{
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
        });
        it('Showld work', ()=>{
            assert.equal(numberOperations.numberChecker(2), 'The number is lower than 100!');
        });
        it('Showld work', ()=>{
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');
        });
        it('Showld work', ()=>{
            assert.equal(numberOperations.numberChecker(-10), 'The number is lower than 100!');
        });
        it('Showld work', ()=>{
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        });
        it('Showld work', ()=>{
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
        });
        it('Showld work', ()=>{
            assert.equal(numberOperations.numberChecker(1000), 'The number is greater or equal to 100!');
        });
    });
    
    describe('Test sumArrays', ()=>{
        it('should work',()=>{
            let first = [1,2,3];
            let second = [1,2,3,4,5];
            assert.deepEqual(numberOperations.sumArrays(first,second), [2,4,6,4,5]);
        });
    
        it('should work',()=>{
            let second = [1,2,3];
            let first = [1,2,3,4,5];
            assert.deepEqual(numberOperations.sumArrays(first,second), [2,4,6,4,5]);
        });
    
        it('should work',()=>{
            let first = [1,2,3];
            let second = [1,2,3];
            assert.deepEqual(numberOperations.sumArrays(first,second), [2,4,6]);
        });
        it('should work',()=>{
            let first = [2];
            let second = [4];
            assert.deepEqual(numberOperations.sumArrays(first,second), [6]);
        });
        it('should work',()=>{
            let first = [];
            let second = [];
            assert.deepEqual(numberOperations.sumArrays(first,second), []);
        });
    });
    
    
    
    });