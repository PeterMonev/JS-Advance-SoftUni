class SummerCamp {
    constructor(organizer,location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp =  {"child": 150,"student": 300,"collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        let validCondition = Object.keys(this.priceForTheCamp);
        let filteredList = this.listOfParticipants.filter((n)=> n.name === name)[0];

        if(!validCondition.includes(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        }
        if(money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`
        }

         if (filteredList === undefined){
            this.listOfParticipants.push({name,condition,power: 100,win: 0});
            return `The ${name} was successfully registered.`
        } else if (filteredList.name === name){
           return `The ${name} is already registered at the camp.`;
        }
    }

    unregisterParticipant (name){
        let filteredList = this.listOfParticipants.filter((n)=> n.name === name)[0];

        if(filteredList !== undefined){
            let index = this.listOfParticipants.indexOf(filteredList);
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`
        } else if (filteredList === undefined){
            throw new Error (`The ${name} is not registered in the camp.`)
        }
    
    }

    timeToPlay (typeOfGame, participant1, participant2){
        let listParticipant1 = this.listOfParticipants.filter((n)=> n.name === participant1)[0];
        let listParticipants2 = this.listOfParticipants.filter((n)=> n.name === participant2)[0];

        if(typeOfGame === 'Battleship'){

           if(listParticipant1 === undefined){
            throw new Error(`Invalid entered name/s.`)
           }
           listParticipant1.power += 20; 
           return `The ${listParticipant1.name} successfully completed the game ${typeOfGame}.`

        }else if (typeOfGame === 'WaterBalloonFights'){
            
           if(listParticipant1 === undefined || listParticipants2 === undefined){
            throw new Error(`Invalid entered name/s.`)

           } else if (listParticipant1.condition !== listParticipants2.condition){
            throw new Error  (`Choose players with equal condition.`);
           }

           if(listParticipant1.power > listParticipants2.power){
             listParticipant1.win += 1;
             return  `The ${listParticipant1.name} is winner in the game ${typeOfGame}.`
           } else if (listParticipants2.power > listParticipant1.power){
            listParticipants2.win += 1;
            return  `The ${listParticipants2.name} is winner in the game ${typeOfGame}.`
           } else {
            return `There is no winner.`
           }
        }
    } 

    toString () {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a,b)=> b.win-a.win);

        for(let tokens of this.listOfParticipants){
            result.push(`${tokens.name} - ${tokens.condition} - ${tokens.power} - ${tokens.win}`)
        }

        return result.join('\n')
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));

console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
