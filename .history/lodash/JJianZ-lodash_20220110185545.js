
var jjianz = {

  chunk:function (ary,num = 1) {
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
      }else if (typeof(ary[i]) == 'string') {
        result.push()
      } else {
        result.push(ary[i])
      }
    }
    return result
  },

  drop: function(ary,n = 1) {
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
  },


  dropRight: function(ary,n = 1) {
    if (n > ary.length) {
      return []
    }
    var result = []
    for (var i = 0;i < ary.length - n;i++) {
      result.push(ary[i])
    }
    return result
  },

  //dropRightWhile
  // dropWhile
  fill: function (ary,value,start = 0,end = ary.length) {
    for (var i = start;i < end;i++) {
      ary[i] = value
    }
    return ary
  },

  // findIndex
  // findLastIndex
  flatten: function (ary) {
    var result = []
    for (var i = 0;i < ary.length;i++) {
      if (Array.isArray(ary[i])) {
        for (var j = 0;j < ary[i].length;j++) {
          result.push(ary[i][j])
        }
      } else {
        result.push(ary[i])
      }
    }
    return result
  }
  // flattenDeep
  // flattenDepth
  // fromPairs
  // head
  // indexOf
  // initial
  // join
  // last
  // lastIndexOf
  // reverse
  // uniq
  // uniqBy
  // without
  // zip
  // countBy
  // every
  // filter
  // find
  // forEach
  // groupBy
  // keyBy
  // map
  // partition
  // reduce
  // reduceRight
  // reject
  // sample
  // shuffle
  // size
  // some
  // isBoolean
  // isEmpty
  // isEqual
}





