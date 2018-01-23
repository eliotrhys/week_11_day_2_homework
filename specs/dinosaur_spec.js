const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe("Dinosaur", function(){

  let dinosaur;

  beforeEach(function(){
    velociraptor = new Dinosaur("Velociraptor", 2);
  })

  it("can get defaults", function(){
    assert.strictEqual(velociraptor.type, "Velociraptor");
    assert.strictEqual(velociraptor.offspring, 2);
  })

})
