var Util = {

  isNumber: function(el) {
    return typeof el === "number";
  },
  isString: function(el) {
    return typeof el === "string";
  },
  isBoolean: function(el) {
    return typeof el === "boolean";
  },
  isFunction: function(el) {
    return typeof el === "function";
  },
  isArray: function(el) {
    if (Array.isArray) {
      return Array.isArray(el);
    } else {
      return Object.prototype.toString.call(el) === '[object Array]';
    }
  },
  isJSON: function(el) {
    return typeof el === "object" && el.toString() === "[object Object]";
  },
  isSimpleType: function(el) {
    return this.isNumber(el) || this.isString(el) || this.isBoolean(el);
  },


  /**
   * 判断是不是空对象，即{}
   * @param  {anything}  obj 参数是任何值
   * @return {Boolean}     如果是空对象，返回true，否则返回false
   */
  isEmptyObject: function(obj) {
    if (!this.isJSON(obj)) {
      return false;
    }
    if (Object.keys) {
      return Object.keys(obj).length > 0;
    }
    for (var prop in obj) {
      // if (obj.hasOwnProperty(prop)) {
        return false;
      // }
    }
    return true;
  },

  /**
   * 深拷贝一个 json 对象
   * @param  {[type]} json [description]
   * @return {[type]}      [description]
   */
  cloneJSON: function(json) {
    if (!this.isJSON(json)) {
      return {};
    }
    var newJSON = {};
    for (var key in json) {
      var value = json[key];
      if (this.isSimpleType(value)) {
        newJSON[key] = value;
      } else if (this.isJSON(value)) {
        newJSON[key] = this.cloneJSON(value);
      } else if (this.isArray(value)) {
        newJSON[key] = this.cloneArray(value);
      }
    }
    return newJSON;
  },

  /**
   * 深拷贝一个数组
   * @param  {[type]} arr [description]
   * @return {[type]}     [description]
   */
  cloneArray: function(arr) {
    if (!this.isArray(arr)) {
      return [];
    }
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      var value = arr[i];
      if (this.isSimpleType(value)) {
        newArr.push(value);
      } else if (this.isJSON(value)) {
        newArr.push(this.cloneJSON(value));
      } else if (this.isArray(value)) {
        newArr.push(this.cloneArray(value));
      }
    }
    return newArr;
  },

  /**
   * 深拷贝一个任意对象，不包括函数
   * @param  {[type]} obj [description]
   * @return {[type]}     [description]
   */
  deepClone: function(obj) {
    var output;
    if (this.isArray(obj)) {
      output = this.cloneArray(obj);
    } else if (this.isJSON(obj)) {
      output = this.cloneJSON(obj);
    }
    return output;
  },

  /**
   * 获取数组里的最大值
   * @param  { Array } arr 数组的值必须都为数字
   * @return {[type]}     [description]
   */
  arrayMax: function(arr) {
    return Math.max.apply(null, arr);
  },

  arrayMin: function(arr) {
    return Math.min.apply(null, arr);
  },

  /**
   * 数组升序排序
   * @param  {[type]} arr [description]
   * @return {[type]}     [description]
   */
  arraySortRaise: function(arr) {
    arr.sort(function(a, b) {
      return a > b;
    });
    return arr;
  },

  /**
   * 数组降序排序
   * @param  {[type]} arr [description]
   * @return {[type]}     [description]
   */
  arraySortDrop: function(arr) {
    arr.sort(function(a, b) {
      return a < b;
    });
    return arr;
  },

  /**
   * 数组去重
   * @param  {[type]} arr [description]
   * @return {[type]}     [description]
   */
  arrayUnique: function(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
      if (map.hasOwnProperty(arr[i])) {
        arr.splice(i, 1);
      } else {
        map[arr[i]] = 1;
        i--;
      }
    }
    return arr;
  },

  /**
   * 判断一个元素是不是在数组中
   * @param  {[type]}  value [description]
   * @param  {[type]}  arr   [description]
   * @return {Boolean}       [description]
   */
  isInArray: function(value, arr) {
    if (!this.isArray(arr)) {
      return false;
    }
    for (var i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        return true;
      }
    }
    return false;
  },


  /****  字符串操作  ****/


  /**
   * 去除字符串左边的空白字符
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  trimLeft: function(str) {
    return str.replace(/^\s*/g, '');
  },

  /**
   * 去除字符串右侧的空白字符
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  trimRight: function(str) {
    return str.replace(/\s*$/g, '');
  },

  /**
   * 去除字符串两侧的空白字符
   * @return {[type]} [description]
   */
  trim: function(str) {
    return str.replace(/^\s*|\s*$/g, '');
  },

  /**
   * 反转字符串
   * @return {[type]} [description]
   */
  strReverse: function(str) {
    return str.split('').reverse().join('');
  },


  /**** 日期操作 ****/

  /**
   * 格式化输出日期
   * @param  {[type]} date [日期对象]
   * @return {[type]}      [description]
   * @eg: dateFormat(date, '%y-%M-%d %h:%m%s')
   * @eg: dateFormat(date, '%y-%m-%d %h:%m%s', 'ch')
   */
  dateFormat: function(date, fmtStr) {
    var y = date.getFullYear(),
      M = date.getMonth() + 1,
      d = date.getDate(),
      h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
    var tpl = fmtStr || '%y-%m-%d %h:%m:%s',
      result;
    result = tpl.replace('%y', y).replace('%m', M).replace('%d', d)
      .replace('%h', h).replace('%m', m).replace('%s', s);
    return result;
  },


  dateFriendly: function(dateStart, dateEnd) {
    var dateEnd = dateEnd || new Date();
    /* ... */
  },


  /****随机****/

  rand: function(min, max) {

  },

  randStr: function(len, type) {

  },

  randArr: function(min, max, len) {

  },


  /****正则****/

  /**
   * 判断字符串是否是有效的email
   * @param  {[type]}  str [description]
   * @return {Boolean}     [description]
   */
  isEmail: function(str) {
    var pat = /^\w+@\w+\.\w+$/g;
    return !!str.match(pat);
  },

  /**
   * 判断字符串是不是满足条件
   * @param  {[type]}  str     目标字符串
   * @param  {[type]}  strRang  可取值范围，默认是字母，下划线，数字
   * @param  {[type]}  minLen     字符串最小长度
   * @param  {[type]}  maxLen     字符串最大长度
   * @return {Boolean}         [description]
   */
  isLegal: function(str, strRang, minLen, maxLen) {

  },

  /**
   * 判断一个字符串是不是手机号
   * @param  {[type]}  str [description]
   * @return {Boolean}     [description]
   */
  isPhoneNumber: function(str) {
    var pat = /^1[3578]\d{9}$/;
    return !!str.match(pat);
  },

  /**** Dom相关 ****/

  hasClass: function(el, cls) {
    return el.className.search(new RegExp('\\b' + cls + '\\b')) > -1;
  },

  addClass: function(el, cls) {
    if (!this.hasClass(el, cls)) {
      return el.className += ' ' + cls;
    }
  },

  removeClass: function(el, cls) {
    if (this.hasClass(el, cls)) {
      element.className = el.className.replace(new RegExp('\\b' + cls + '\\b'), '');
      return true;
    }
    return false;
  },

  /**** ajax ****/
  ajax: function(opts) {
    var url = opts.url,
      type = opts.type,
      data = opts.data,
      dataType = opts.dataType || 'json',
      success = opts.success || function() {},
      error = opts.error || function() {};
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        if (dataType == 'json') {
          success(JSON.parse(xmlhttp.responseText));
        } else {
          success(xmlhttp.responseText);
        }
      } else if (xmlhttp.status === 404) {
        error();
      }
    };

    if (type.toLowerCase() === "get") {
      xmlhttp.open(opts.type, opts.url + '?' + this.serialize(data), true);
      xmlhttp.send();
    } else if (type.toLowerCase() === "post") {
      xmlhttp.open(opts.type, opts.url, true);
      xmlhttp.send(data);
    }
  },

  serialize: function(opts) {
    var str = '';
    for (var key in opts) {
      str += key + '=' + opts[key] + '&';
    }
    return str.replace(/&$/, '');
  }


};