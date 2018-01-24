function Enclosure(){
  this.paddock = [];
}

Enclosure.prototype.dinoCount = function(){
  return this.paddock.length;
}

Enclosure.prototype.addDinosaur = function(dinosaur){
  this.paddock.push(dinosaur);
}

// Enclosure.prototype.removeType = function(type){
//   for (dino of this.paddock){
//     if (dino.type === type){
//       this.paddock[0] = dino;
//       this.paddock.pop(0);
//     }
//   }
// }

Enclosure.prototype.removeByType = function(type){
  this.paddock = this.paddock.filter(dino => dino.type !== type);
}

Enclosure.prototype.getOffspringCount = function(){
  var dinos = [];
  for (dino of this.paddock){
    if (dino.offspring > 2){
      dinos.push(dino);
    }
  }
  return dinos;
}



module.exports = Enclosure;
