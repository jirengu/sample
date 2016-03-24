
function sum () {
	var s = 0;
	[].forEach.call(arguments, function(val){
		s += val;
	});
	return s;
}
module.exports = sum;