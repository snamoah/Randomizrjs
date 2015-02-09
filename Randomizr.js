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

Randomizer = function(array) {
  temp_array = array_of_items = array;

  //randomly generate item
  var get_item = function() {
    if(temp_array.is_empty())
      temp_array = array_of_items.slice().shuffle();

    return temp_array.shuffle().shift();
  };

  // public methods
  return {
    'get_all_items': function() {
      return array_of_items.shuffle();
    },
    'get_random_item': function(one_at_a_time) {
      if(one_at_a_time)
        return get_item();
      return [get_item(), get_item(), get_item()]; // get an array of 3 eits
    }
  }
}();
