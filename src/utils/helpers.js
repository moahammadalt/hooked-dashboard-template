export const checkValue = (value, key) => {

	value = key ? key.split(".").reduce( (o, x) => (typeof o == "undefined" || o === null) ? o : o[x] , value) : value;
	return ((!value && value !== false) || /^\s*$/.test(value)) ? false : true;
};

export const isEmail = (email) => /^[a-z0-9._%+-]+@.+\..+/.test(email);

export const isName = (name) => /^(?=.{2,150}$).*/.test(name);

export const createHash = (arr, key) => {
  var Hash = function () {
    this.data = {};
    if (arr && Array.isArray(arr)) {
      arr.map((o) => {
        this.data[o[key]] = o;
      });
      this.size = arr.length;
    }
    else {
      this.size = 0;
    }
  };
  Hash.prototype.keys = function () {
    return Object.keys(this.data);
  }
  Hash.prototype.values = function () {
    return Object.values(this.data);
  }

  return new Hash();
};