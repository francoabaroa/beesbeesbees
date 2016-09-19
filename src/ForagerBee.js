var ForagerBee = function() {
  Grub.call(this);
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
};

ForagerBee.prototype = Object.create(Grub.prototype);

