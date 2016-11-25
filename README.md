# TDStruct

TDStruct comes from Tripledollar and is pure JavaScript structure to build DOM elements. This module is a utility for Node.js to create HTML documents from tdstructs. The definition fo tdstruct can be found [here](http://tripledollar.net/tdstruct/index.html). To use this utility install it with:

```
npm install tdstruct
```

Then use it in your code.

```js
var tdstruct = require('tdstruct');

var tds = ['html',
  ['head',
    ['title', 'Test TDStruct']
  ],
  ['body',
    ['img', {src: 'https://steenk.github.io/images/logo.png'}]
  ]
];

console.log(tdstruct.toHtml(tds));
```


