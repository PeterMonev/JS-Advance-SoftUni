class footballTeam {
    constructor(clubName,country){
         this.clubName = clubName;
         this.country = country;
         this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        let result = [];
        for(let tokens of footballPlayers){
            let [name,age,playerValue] = tokens.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
           
           let fitred = this.invitedPlayers.filter((n)=> n.name === name)[0];
           
           if(fitred === undefined){
             this.invitedPlayers.push({name,age,playerValue});
             result.push(name);
           } else {
               if(fitred.playerValue < playerValue){
                 fitred.playerValue = playerValue;
               }
           }
        }
        return `You successfully invite ${result.join(', ')}.`;
     }

     signContract(selectedPlayer){
        let [name,playerOffer] = selectedPlayer.split('/')
        let fitred = this.invitedPlayers.filter((n)=> n.name === name)[0];
        
        if(fitred === undefined){
            throw new Error(`${name} is not invited to the selection list!`)
        } else if (fitred.playerValue > playerOffer){
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(fitred.playerValue- playerOffer)} million more are needed to sign the contract!`)
        } else {
            fitred.playerValue = 'Bought';
            return `Congratulations! You sign a contract with ${fitred.name} for ${playerOffer} million dollars.`
        }    
     }

     ageLimit(name, age){
        let fitred = this.invitedPlayers.filter((n)=> n.name === name)[0];

        if(fitred.age >= age) {
            return `${name} is above age limit!`
        }

        if(fitred === undefined){
            throw new Error(`${name} is not invited to the selection list!`)
        } else if (age - fitred.age < 5){
            return `${name} will sign a contract for ${Math.abs(age - fitred.age )} years with ${this.clubName} in ${this.country}!`
        } else if(age - fitred.age >= 5){
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }  
     }

     transferWindowResult(){
        let result = ["Players list:"];
        this.invitedPlayers.sort((a,b)=> a.name.localeCompare(b.name));

        for(let tokens of this.invitedPlayers){
            result.push(`Player ${tokens.name}-${tokens.playerValue}`)
        }

        return result.join("\n");
     }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
