var assert = require('assert');
var Record = require('../record.js');


describe('Record', function(){


var record1;
var record2;
var record3;
var record4;

beforeEach(function(){
  record1 = new Record("Justin Bieber", "Purpose", "pop", 15);
  record2 = new Record("Bruce Springstein", "Born to run", "rock", 25);
  record3 = new Record("Nas", "Illmatic", "rap", 20);
  record4 = new Record("G-Eazy", "When its dark out", "rap", 10);
})

it('should have an artist', function(){
  assert.strictEqual(record1.artist, "Justin Bieber");
})

it('should have a title', function(){
  assert.strictEqual(record2.title, "Born to run");
})

it('should have a genre', function(){
  assert.strictEqual(record3.genre, "rap");
})

it('should have a price', function(){
  assert.strictEqual(record4.price, 10);
})

})
