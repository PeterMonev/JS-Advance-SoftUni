class SmartHike {
  constructor(username) {
    this.username = username;
    this.goal = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    const goals = Object.keys(this.goal);
    if (goals.includes(peak)) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goal[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    const goals = Object.keys(this.goal);
    if (!goals.includes(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    } else if (this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    let currTime = time * 10;

    if (this.resources - currTime < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.resources -= currTime;
      this.listOfHikes.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria === "hard" || criteria === "easy") {
      let allHikes = this.listOfHikes.filter(
        (hikes) => hikes.difficultyLevel === criteria
      );

      let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
      let bestHikes = sortedHikes[0];

      if (bestHikes === undefined) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      return `${this.username}'s best ${criteria} hike is ${bestHikes.peak} peak, for ${bestHikes.time} hours`;
    } else if (criteria === "all") {
      let result = ["All hiking records:"];
      this.listOfHikes.forEach((hike) => {
        result.push(
          `${this.username} hiked ${hike.peak} for ${hike.time} hours`
        );
      });

      return result.join("\n");
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
