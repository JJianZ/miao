var jjianz = {

  chank:function (ary,num) {
    var result = []
    for (var i = 0;i < num;i++) {
      result.push(ary.splice(i,i + 1))
    }
    return result
  }
}
