function curriedAdd(total) {
  return (total === undefined) ? 0 : function(num){
    if (num === undefined) return total;
    return curriedAdd(total + num);
  }
}

module.exports = { curriedAdd };
