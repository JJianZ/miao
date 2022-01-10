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
    var result = []
    for (var i = 0;i < ary.length;i++) {
      if (Boolean(ary[i]) == false) {
        result.push()
      }else if (typeof(ary[i]) !== 'numver') {
        result.push()
      } else {
        result.push(ary[i])
      }
    }
    return result
  },

  drop: function(ary,n) {
    if (n > ary.length) {
      return []
    }

    var result = []
    for (var i = n;i < ary.length;i++) {
      result.push(ary[i])
    }
    return result


    // ary.slice(0,n)
    // return ary
  }
}
