function sum() {
  let args = Array.from(arguments);
  let sum = 0;
  args.forEach(num => {
    sum += num;
  });
  return sum;
}

function sum2(...args) {
  let sum = 0;
  args.forEach(num => {
    sum += num;
  });
  return sum;
}

Function.prototype.myBind = function(context, ...bargs) {
  return (...cargs) => {
    return this.apply(context, bargs.concat(cargs))
  } 
}

function curriedSum(num) {
  let total = num;
  let count = 0;
  let sum = 0;

  return function returnSum(num2) {
    sum += num2;
    count += 1;
    if (count === total) {
      return sum;
    } else {
      return returnSum
    }
  }
}


Function.prototype.curry = function (numArgs) {
  let args = [];
  let total = numArgs;
  let that = this;
  return function _curry(num) {
    args.push(num);
    if (args.length === total) {
      return that.apply(that, args)
    } else {
      return _curry;
    }
  }
}


Function.prototype.currySpread = function (numArgs) {
  let args = [];
  let total = numArgs;
  let that = this;
  return function _curry(...nums) {
    nums.forEach(num => args.push(num));
    if (args.length >= total) {
      return that.apply(that, args)
    } else {
      return _curry;
    }
  }
}

s = sum.currySpread(2)

console.log(s(1, 2))

// let sum3 = curriedSum(4);

// console.log(sum3(5)(30)(20)(1)); // => 56