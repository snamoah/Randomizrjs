# Randomizr.js

Randomizr.js is a javascript library that randomizes array objects and allows you to get any number of elements from the array.

This is useful for generating random items from the array of items.

## Download 
Here is the link to [download](https://raw.githubusercontent.com/snamoah/Randomizrjs/master/Randomizr.js)

## Usage
Initialize Randomizr class:

```
var array = [ { 'name': 'Naana' }, { 'name': 'Samuel' }, { 'name': 'Kissi' } ];

Randomizr.init(array);        //initialize Randomizr with the array
```

To get a random list of all items,

```
Randomizr.getAllItems();      //get all items from array randomized
```

To get a random item from the array,

```
Randomizr.getRandomItem();      //get one random item 
```

To get a specific number of items from the array,

```
var n = 4;

items = Randomizr.getRandomItems(n);     //return n number of random items
```

Enjoy!

## Developer
Developed by [Samuel Nkoom Amoah](https://snamoah.github.io)
