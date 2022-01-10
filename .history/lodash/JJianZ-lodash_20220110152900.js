var jjianz = {

  chank:function (ary,num = 1) {
    var result = []
    while (num) {
      result.push(ary.splice(0,num))
      if (ary.length == 0) {
        break
      }
    }
    return result
  }
}
