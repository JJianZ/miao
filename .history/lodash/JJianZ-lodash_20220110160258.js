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
      if (typeof(ary[i]) !== 'numver') {
        result.push()
      } else {
        result.push(ary[i])
      }
    }
    return result
  }
}
