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

Array.prototype.is_empty = function() {
  return (this.length == 0);
}

Randomizr = function() {
  temp_array = array_of_items = [];

  //randomly generate item
  var get_item = function() {
    if(temp_array.is_empty())
      temp_array = array_of_items.slice().shuffle();

    return temp_array.shuffle().shift();
  };

  // public methods
  return {
    'init': function(array) {
      temp_array = array_of_items = array;
    },
    'get_all_items': function() {
      return array_of_items.shuffle();
    },
    'get_random_item': function() {
      return get_item();
    },
    'get_random_items': function(number) {
      items = [];

      for(var i = 0; i < number; i++)
        items.push(get_item());

      return items;
    }
  };
}();
