# babel-creed-async

Use ES7 [async functions](http://wiki.ecmascript.org/doku.php?id=strawman:async_functions) with [babel](https://babeljs.io) and [creed](https://github.com/briancavalier/creed).  This babel plugin turns ES7 async functions into creed coroutines.

Check out [an example](https://github.com/briancavalier/babel-creed-async/example).

## Get it

```
npm install babel-creed-async
```

## Command line

Add `babel-creed-async` as a plugin and blacklist `regenerator`.

```
babel --plugins babel-creed-async -b regenerator ...
```

## babelrc

Add `babel-creed-async` as a plugin and blacklist `regenerator` in .babelrc or in the babel section of package.json.

```js
{
    "plugins": ["babel-creed-async"],
    "blacklist": ["regenerator"]
}
```

