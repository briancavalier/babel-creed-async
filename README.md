# babel-creed-async

**Note:** This plugin works with Babel 5.  It's not needed in Babel 6.  See [Babel 5](#babel-5) and [Babel 6](#babel-6) below for more info

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

### babelrc

Add `babel-creed-async` as a plugin and blacklist `regenerator` in .babelrc or in the babel section of package.json.

```js
{
    "plugins": ["babel-creed-async"],
    "blacklist": ["regenerator"]
}
```

## Babel 6

You can use the [transform-async-to-module-method](http://babeljs.io/docs/plugins/transform-async-to-module-method/) plugin in Babel 6, instead of `babel-creed-async`.

### Get creed

```
npm install --save creed
```

### babelrc

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
