var jjianz = {

  chank:function (ary,num) {
    var result = []
    for (var i = 0;i < ary.length;i++) {
      result.push(ary.slice(i,i + 1))
    }
    return result
  }
}
