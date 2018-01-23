const assert = require("assert");
const Dinosaur = require("../dinosaur.js");
const Enclosure = require("../enclosure.js");

describe("Enclosure", function(){

  let the_park;
  let velociraptor;
  let velociraptor2;
  let velociraptor3;
  let tyrannosaurus_rex;

  beforeEach(function(){
    velociraptor = new Dinosaur("Velociraptor", 2);
    velociraptor2 = new Dinosaur("Velociraptor", 2);
    velociraptor3 = new Dinosaur("Velociraptor", 2);
    tyrannosaurus_rex = new Dinosaur("Tyrannosaurus Rex", 3);
    the_park = new Enclosure();
  })

  it("can add dinos to park", function(){
    the_park.addDinosaur(velociraptor);
    assert.strictEqual(the_park.dinoCount(), 1);
  })

  // it("can remove type", function(){
  //   the_park.addDinosaur(velociraptor);
  //   the_park.addDinosaur(velociraptor2);
  //   the_park.addDinosaur(velociraptor3);
  //   the_park.addDinosaur(tyrannosaurus_rex);
  //   the_park.removeType("Velociraptor");
  //   assert.strictEqual(the_park.dinoCount(), 1);
  // })

  it("can get offspring count", function(){
    the_park.addDinosaur(velociraptor);
    the_park.addDinosaur(velociraptor2);
    the_park.addDinosaur(tyrannosaurus_rex);
    assert.strictEqual(the_park.getOffspringCount(), [tyrannosaurus_rex])
  })


})
