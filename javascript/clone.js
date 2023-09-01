function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    const res = {}
    for (const key in value) {
      res[key] = clone(value[key])
    }
    return res
  } else {
    return value
  }
}

function copyTree(obj) {
    return !obj ? obj :
        isObject(obj) ? Object.keys(obj).reduce(function(copyObj, key) {
            copyObj[key] = copyTree(obj[key]);
            return copyObj;
        }, {}) : Array.isArray(obj) ? obj.map(copyTree) : obj;
}
