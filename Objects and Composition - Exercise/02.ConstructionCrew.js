function constructionCrew(worker){

    if(this.dizziness){
        this.levelOfHydrated += this.weight * this.experience * 0.1;
        this.dizziness = false;
    }
  return worker;
}

constructionCrew({ 
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true 
});
  