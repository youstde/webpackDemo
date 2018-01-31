var tpl = require('./template/center.html');
var parentEl = document.createElement('div');
parentEl.innerHTML = tpl;
parentEl.querySelector('button').onclick = function() {
	console.log(111);
}
document.body.appendChild(parentEl);


