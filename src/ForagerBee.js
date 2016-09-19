var ForagerBee = function() {
  Grub.call(this);
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
};

ForagerBee.prototype = Object.create(Grub.prototype);

