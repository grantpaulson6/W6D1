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
  let that = this;
  return function (...cargs) {
    return that.apply(context, bargs.concat(cargs));
  } 
}

function curriedSum(num) {
  const total = num;
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
  const args = [];

  return _curry = (num) => {
    args.push(num);
    if (args.length === numArgs) {
      return this(...args)
    } else {
      return _curry;
    }
  }
}
let s = sum2.curry(2)

console.log(s(1)(2))


Function.prototype.currySpread = function (numArgs) {
  let args = [];
  let total = numArgs;
  let that = this;
  return function _curry(...nums) {
    nums.forEach(num => args.push(num));
    if (args.length >= total) {
      return that(args)
    } else {
      return _curry;
    }
  }
}

s = sum.currySpread(2)

// console.log(s(1, 2))

// let sum3 = curriedSum(4);

// console.log(sum3(5)(30)(20)(1)); // => 56