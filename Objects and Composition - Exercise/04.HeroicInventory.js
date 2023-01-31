function heroicInventory(input){
    const heroes = [];

    for(const lines of input){
      let [name,level,items] = lines.split(' / ');
      level = Number(level);
      items = items ? items.split(', ') : [];
      
      heroes.push({name,level,items});
    }
  
  return JSON.stringify(heroes);

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);