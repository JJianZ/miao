var jjianz = {

  chank:function (ary,num) {
    var result = []
    while (num) {
      result.push(ary.splice(0,num))
      num--
      if (ary.length == 0) {
        break
      }
    }
    return result
  }
}
