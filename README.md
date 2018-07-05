# babel-creed-async

**Note:** This plugin is only compatible with Babel 5.  See [Babel 6](#babel-6) and [Babel 7](#babel-7) for instructions on how to use with these versions.

Use ES7 [async functions](http://wiki.ecmascript.org/doku.php?id=strawman:async_functions) with [babel 5](https://babeljs.io) and [creed](https://github.com/briancavalier/creed).  This babel plugin turns ES7 async functions into creed coroutines.

Check out [an example](https://github.com/briancavalier/babel-creed-async/tree/master/example).

## Babel 5

### Get it

```
npm install --save-dev babel-creed-async
npm install --save creed
```

### Command line

Add `babel-creed-async` as a plugin and blacklist `regenerator`.

```
babel --plugins babel-creed-async -b regenerator ...
```

### in .babelrc

Add `babel-creed-async` as a plugin and blacklist `regenerator` in .babelrc or in the babel section of package.json.

```js
{
    "plugins": ["babel-creed-async"],
    "blacklist": ["regenerator"]
}
```

## Babel 6

Instead of using this plugin, please use the [transform-async-to-module-method](http://babeljs.io/docs/plugins/transform-async-to-module-method/) plugin in Babel 6.

### Get creed

```
npm install --save creed
```

### in .babelrc

```js
{
    "plugins": [
      ["transform-async-to-module-method", {
        "module": "creed",
        "method": "coroutine"
      }]
    ]
}
```

## Babel 7

Instead of using this plugin, please use the [@babel/plugin-transform-async-to-generator](https://babeljs.io/docs/en/next/babel-plugin-transform-async-to-generator) plugin in Babel 7, 

### installing

```
npm install --save creed
npm install --save-dev @babel/plugin-transform-async-to-generator
```

### in .babelrc

```js
{
    "plugins": [
      ["@babel/plugin-transform-async-to-generator", {
        "module": "creed",
        "method": "coroutine"
      }]
    ]
}
```
