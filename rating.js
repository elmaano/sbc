function rating(players) {
  var avg = _.mean(players);
  var adj = 0;
  players.forEach(function(el){
    adj += Math.max((el - Math.floor(avg)), 0);
  });
  return (adj / players.length) + avg;
}
