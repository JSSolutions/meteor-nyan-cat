var state = 1;
var cat = [[
  '-_-_-_-_-_-_,-------,   ',
  '_-_-_-_-_-_-|   /\\_/\\ ',
  '-_-_-_-_-_-~|__( ^ .^)  ',
  '_-_-_-_-_-_- ""  ""     '
], [
  '_-_-_-_-_-_-,-------,   ',
  '-_-_-_-_-_-_|   /\\_/\\ ',
  '_-_-_-_-_-_~|__( ^ .^)  ',
  '-_-_-_-_-_-_  ""   ""   '
]];

Meteor.setInterval(function () {
  state = !state ? 1:0;
  console.clear();
  console.log('Nyan!');
  console.log(cat[state].join('\n'));
}, 300);