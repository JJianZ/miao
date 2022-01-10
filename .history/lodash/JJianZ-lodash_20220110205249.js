
var jjianz = {

  chunk:function (ary,num = 1) {     //将数组中的元素分成长度为num的组，若不能均分，最后的组都是剩余元素
    var result = []
    while (num) {
      result.push(ary.splice(0,num))
      if (ary.length == 0) {
        break
      }
    }
    return result
  },

  compact: function (ary) {          //删出所有错误值的数组，false,NaN,0,'',undefined,dalsey
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

  drop: function(ary,n = 1) {        //从头开始删除数组的n个元素
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

  dropRight: function(ary,n = 1) {    //从末尾开始删除数组的n个元素
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

  fill: function (ary,value,start = 0,end = ary.length) {     //将value的值填充到[start,end)数组的这个范围
    for (var i = start;i < end;i++) {
      ary[i] = value
    }
    return ary
  },

  // findIndex
  // findLastIndex

  flatten: function (ary) {         //将多维数组展开一层
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
  },


  flattenDeep: function(ary) {      //展开多维数组(递归)
    var result = []
    for (var i = 0;i < ary.length;i++){
      if (Array.isArray(ary[i])) {
        result.push(...flattenDeep(ary[i]))
      } else {
        result.push(ary[i])
      }
    }
    return result
  },


  //flattenDepth
  // fromPairs

  head: function (ary) {          //取出数组的第一个元素
    return ary[0]
  },


  indexOf: function (ary,value,fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex += ary.length
    }
    for (var i = fromIndex;i < ary.length;i++) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  }
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





