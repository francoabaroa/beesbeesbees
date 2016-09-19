var RetiredForagerBee = function() {
  ForagerBee.call(this);
  // Grub.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(Grub.prototype);

RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
};


