# Request & Response - JSON

Get a JSON file(s) and parse it/them.


## Requires

- [Node.JS](http://nodejs.org/)


## Usage

```javascript
var myJsonFile = new JSONFile(),
    myPath     = './path/to/json/folder',
    myFiles    = ['foo.json', 'bar.json', 'baz.json'];

myJsonFile
    .request(myPath, myFiles)
    .response(myFiles);
```


## Includes

- [Mocha](http://visionmedia.github.io/mocha/)
- [Chai](http://chaijs.com/)


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
