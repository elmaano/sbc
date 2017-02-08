const should = require('should');

let rating = require('../rating.js');

describe('Rating', () => {
  describe('simple rating', () => {
    it('should return 82 with all 82s', () => {
      rating([82,82,82,82,82,82,82,82,82,82,82]).should.be.exactly(82);
    });
  });

  describe('84 squads', () => {
    // squad list from https://docs.google.com/spreadsheets/d/1kSSlWo85X5-wiPWqP2hSMYmGBmZhWBx52oneEMsGq8Y/edit#gid=0
    it('should return 84', () => {
      rating([89,83,83,83,83,83,83,83,83,83,82]).should.be.exactly(84);
      rating([88,84,83,83,83,83,83,83,83,83,83]).should.be.exactly(84);
      rating([87,84,84,84,83,83,83,83,83,83,82]).should.be.exactly(84);
      rating([87,86,83,83,83,83,83,83,83,82,82]).should.be.exactly(84);
      rating([87,86,83,83,83,83,83,83,83,83,81]).should.be.exactly(84);
      rating([86,86,83,83,83,83,83,83,83,83,83]).should.be.exactly(84);
      rating([86,84,84,84,84,83,83,83,83,83,83]).should.be.exactly(84);
      rating([86,85,84,84,83,83,83,83,83,83,82]).should.be.exactly(84);
      rating([85,85,84,84,84,83,83,83,83,83,83]).should.be.exactly(84);
      rating([85,84,84,84,84,84,84,83,83,83,82]).should.be.exactly(84);
      rating([84,84,84,84,84,84,84,84,84,84,79]).should.be.exactly(84);
      rating([84,84,84,84,84,84,84,84,84,83,83]).should.be.exactly(84);
    });
  });
});
