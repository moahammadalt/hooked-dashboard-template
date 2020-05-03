export const checkValue = (value, key) => {
  value = key
    ? key
        .split('.')
        .reduce(
          (o, x) => (typeof o == 'undefined' || o === null ? o : o[x]),
          value
        )
    : value;
  return (!value && value !== false) || /^\s*$/.test(value) ? false : true;
};

export const isEmail = email => /^[a-z0-9._%+-]+@.+\..+/.test(email);

export const isName = name => /^(?=.{2,150}$).*/.test(name);

export const createHash = (arr, key) => {
  var Hash = function() {
    this.data = {};
    if (arr && Array.isArray(arr)) {
      arr.forEach(o => {
        this.data[o[key]] = o;
      });
      this.size = arr.length;
    } else {
      this.size = 0;
    }
  };
  Hash.prototype.keys = function() {
    return Object.keys(this.data);
  };
  Hash.prototype.values = function() {
    return Object.values(this.data);
  };

  return new Hash();
};

export const getParentChildArr = (arr, parentIdKey) => {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]['children'] = [];
    mappedArr[arrElem.id]['key'] = arrElem.id;
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem[parentIdKey || 'parent_id']) {
        mappedArr[mappedElem[parentIdKey || 'parent_id']]['children'].push(
          mappedElem
        );
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
};

export const extractSlug = (name = '') => {
  return name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const arrayHasDuplicates = array => {
  var valuesSoFar = [];
  for (var i = 0; i < array.length; ++i) {
    var value = array[i];
    if (valuesSoFar.indexOf(value) !== -1) {
      return true;
    }
    valuesSoFar.push(value);
  }
  return false;
};

export const getUIDate = (date = '', showHour) =>
  showHour
    ? `${date.substring(0, 10)} ${date.substring(11, 16)}`
    : date.substring(0, 10);
