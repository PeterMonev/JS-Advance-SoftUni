const {expect} = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('hiringEmployee checker',()=> {
    it('Input param validation',()=>{
        expect(()=> companyAdministration.hiringEmployee('a','a',1)).to.be.throw(`We are not looking for workers for this position.`)
    })

    it('Valid input experience over and equal 3',()=>{
        expect(companyAdministration.hiringEmployee('a','Programmer',3)).to.be.equal(`a was successfully hired for the position Programmer.`);
        expect(companyAdministration.hiringEmployee('a','Programmer',4)).to.be.equal(`a was successfully hired for the position Programmer.`);
    })
    
    it('Not matching',()=>{
        expect(companyAdministration.hiringEmployee('a','Programmer',2)).to.be.equal(`a is not approved for this position.`)
    })
})

describe('calculateSalary checker',()=> {
    it('Validate Input Experience',()=>{
        expect(()=>companyAdministration.calculateSalary('1')).to.be.throw("Invalid hours");
        expect(()=>companyAdministration.calculateSalary(-1)).to.be.throw("Invalid hours");
        expect(()=>companyAdministration.calculateSalary({})).to.be.throw("Invalid hours");
        expect(()=>companyAdministration.calculateSalary([])).to.be.throw("Invalid hours");
        expect(()=>companyAdministration.calculateSalary(null)).to.be.throw("Invalid hours");
        expect(()=>companyAdministration.calculateSalary(undefined)).to.be.throw("Invalid hours");
    })

    it('Working Hours',()=> {
        expect(companyAdministration.calculateSalary(1)).to.be.equal(15);
        expect(companyAdministration.calculateSalary(161)).to.be.equal(3415)
        expect(companyAdministration.calculateSalary(160)).to.be.equal(2400)
    })
})

describe('firedEmployee checker',()=>{
    it('Employee chker',()=>{
        expect(companyAdministration.firedEmployee(['a','b','c'],1)).to.be.equal('a, c')
        expect(companyAdministration.firedEmployee(['a','b','c'],0)).to.be.equal('b, c')
        expect(companyAdministration.firedEmployee(['a',],0)).to.be.equal('')
    })

    it('Input Validator',()=>{
        expect(()=> companyAdministration.firedEmployee({},1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee(1,1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee('1',1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee(undefined,1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee(-1,1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee(NaN,1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee(null,1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee([],-1)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee([],'1')).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee([],{})).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee([],NaN)).to.be.throw(`Invalid input`);
        expect(()=> companyAdministration.firedEmployee([],undefined)).to.be.throw(`Invalid input`)
        expect(()=> companyAdministration.firedEmployee([],null)).to.be.throw(`Invalid input`);
    })
})