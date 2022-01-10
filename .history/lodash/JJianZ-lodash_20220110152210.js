var jjianz = {

  chank:function (ary,num) {
    var result = []
    for (var i = 0;i < ary.length;i++) {
      result.push(ary.splice(i,num))
      if (ary.length < num) {
        result.push(ary[i])
      }
    }
    return result
  }
}
