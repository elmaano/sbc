var rating = function (players) {
  var sum = _.sum(players);
  var avg = _.mean(players);
  var excess = _(players).reduce(function(res, val){
    return res += Math.max((val - avg), 0);
  }, 0);

  return _(_(excess + sum).round() / 11).floor();
}

if (typeof exports !== 'undefined') {
  _ = require('lodash');
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = rating;
  }
  exports.rating = rating;
}
