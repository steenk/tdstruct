var tdstruct = require('./tdstruct.js');

var td = ['html', ['head', ['title', {hello:123}, 'Test']], ['body', ['h1.hello.blue#id1', 'Hello']]];
console.log(tdstruct.toHtml(td));

