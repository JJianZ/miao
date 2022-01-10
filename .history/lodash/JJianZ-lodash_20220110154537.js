var jjianz = {

  chank:function (ary,num) {
    var result = []
    while (num) {
      result.push(ary.splice(0,num))
      if (ary.length == 0) {
        break
      }
    }
    return result
  },

  compact: function (ary) {
    for (var i = 0;i < ary.length;i++) {
      if (ary[i] == NaN) {
        ary.splice(i,1)
      }
      if (ary[i] == 0) {
        ary.splice(i,1)
      } else if (typeof(ary[i]) != 'number'){
        ary.splice(i,1)
      }
    }
    return ary
  }
}
