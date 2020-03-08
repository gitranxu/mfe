export function prefix_uuid() {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}

/**
 * 深拷贝
 * @param {*} obj 拷贝对象(object or array)
 * @param {*} cache 缓存数组
 */
export function prefix_deepCopy(obj, cache = []) {
	// typeof [] => 'object'
	// typeof {} => 'object'
	if (obj === null || typeof obj !== 'object') {
	  return obj
	}
	// 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环
	/**
	 * 类似下面这种
	 * var a = {b:1}
	 * a.c = a
	 * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
	 */
	const hit = cache.filter(c => c.original === obj)[0]
	if (hit) {
	  return hit.copy
	}
  
	const copy = Array.isArray(obj) ?  [] :   {}
	// 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它
	cache.push({
	  original: obj,
	  copy
	})
	Object.keys(obj).forEach(key => {
	  copy[key] = prefix_deepCopy(obj[key], cache)
	})
  
	return copy
}
	
export function prefix_debounce(fn, wait = 1000) {
	var timeout = null;
	return function() {
		if(timeout !== null) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(fn, wait);
	}
}

export function prefix_throttle(fn, delay = 500) {
	var timer = null;
	return function() {
		var context = this;
		var args = arguments;
		if (!timer) {
			timer = setTimeout(function() {
				fn.apply(context, args);
				timer = null;
			}, delay);
		}
	}
}