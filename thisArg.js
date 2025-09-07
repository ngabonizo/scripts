let obj = {
  factor: 2,
  multiplyAll(arr) {
    return arr.map(function(n) {
      return n * this.factor; // ❌ error, this is undefined
    }.bind(this)); // ✅ fix with bind
  }
};

// you could simply write 

 obj = {
  factor: 2,
  multiplyAll(arr) {
    return arr.map(function(n) {
      return n * this.factor;
    }, this); // ✅ cleaner
  }
};
