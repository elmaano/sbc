importScripts('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.15.0/lodash.min.js');
importScripts('vendor/combinatorics.js');
importScripts('rating.js');

onmessage = function(e) {
  var data = e.data;
  var combinations = [];

  cmb = Combinatorics.baseN(data.possible, data.openPositions);
  while(a = cmb.next()){
    // a is open position set
    if(Math.floor(rating(_.concat(a, data.squad))) == data.target){
      if(!_.includes(combinations, a.sort().join(''))){
        postMessage({
          code: 'SQUAD',
          squad: a.sort()
        });
        combinations.push(a.sort().join(''));
      }
    }
  }
  postMessage({
    code: 'DONE'
  });
};
