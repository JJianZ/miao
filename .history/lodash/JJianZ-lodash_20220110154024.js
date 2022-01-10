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
      if (ary[i] == 0) {
        ary.splice(1,0)
      } else if (ary[i].typrof != number){
        ary.splice(1,0)
      }
    }
    return ary
  }
}
