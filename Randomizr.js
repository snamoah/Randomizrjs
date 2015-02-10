//adding a shuffle function to the Array class
Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }

  return this;
}

Array.prototype.isEmpty = function() {
  return (this.length == 0);
}

Randomizr = function() {
  tempArray = arrayOfItems = [];

  //randomly generate item
  var getItem = function() {
    if(tempArray.isEmpty())
      tempArray = arrayOfItems.slice().shuffle();

    return tempArray.shuffle().shift();
  };

  // public methods
  return {
    'init': function(array) {
      tempArray = array.slice();
      arrayOfItems = array.slice();
    },
    'getAllItems': function() {
      return arrayOfItems.slice().shuffle();
    },
    'getRandomItem': function() {
      return getItem();
    },
    'getRandomItems': function(number) {
      items = [];

      for(var i = 0; i < number; i++)
        items.push(getItem());

      return items;
    }
  };
}();
