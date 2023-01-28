class Bank {
    constructor (bankName){
        this._bankName = bankName;
        this.allCustomers = [];
   
    }
   
   
    newCustomer(customer){
        let newCustomer = this.allCustomers.find(x=>x.personalId ==customer.personalId)
        if(newCustomer){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
      
        this.allCustomers.push(customer);
        return customer;
    }
   
    depositMoney (personalId, amount){
       let customer = this.allCustomers.find(x=>x.personalId==personalId);
       if(!customer){
           throw new Error(`We have no customer with this ID!`)
       }
       if(!customer.totalMoney){
           customer.totalMoney = amount;
           customer.transactions = [];
       }else{
           customer.totalMoney+=amount;
       }
       
       
       let number = customer.transactions.length+1;
       let value = `${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`
       let transcation = {number, value};
       customer.transactions.push(transcation);
   
       return `${customer.totalMoney}$`;
    }
   
    withdrawMoney (personalId, amount){
       let customer = this.allCustomers.find(x=>x.personalId==personalId);
       if(!customer){
           throw new Error('We have no customer with this ID!');
       }
       if(customer.totalMoney<amount){
           throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
       }
   
       customer.totalMoney-=amount;
       let number = customer.transactions.length+1;
       let value = `${customer.firstName} ${customer.lastName} withdrew ${amount}$!`
       let transaction = {number, value};
       customer.transactions.push(transaction)
       return `${customer.totalMoney}$`;
    }
   
    customerInfo(personalId){
        let customer = this.allCustomers.find(x=>x.personalId==personalId);
        if(!customer){
            throw new Error(`We have no customer with this ID!`)
        }
   
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`)
        result.push(`Customer ID: ${customer.personalId}`);
        result.push(`Total Money: ${customer.totalMoney}$`);
        result.push(`Transactions:`);
        
        customer.transactions.sort((a,b)=> b.number-a.number).forEach(element => {
            result.push(element.number+". "+element.value);
        });
        return result.join("\n");
    }
   }