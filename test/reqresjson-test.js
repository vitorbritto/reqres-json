
// REQUIRE JSONFILE CONSTRUCTOR
var JSONFile = function() {

    'use strict';

    var _this = this;

    if (!(_this instanceof JSONFile)) {
        throw new Error('JSONFile needs to be called with the new keyword');
    }

    // BUILD METHODS
    this.request = function(path, filename, done) {

        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                return done(this.responseText);
            } else {
                console.log('Server Error! Timeout!');
            }
        };

        xhr.onerror = function() {
            console.log('Error on connection!');
        };

        xhr.open('GET', path, filename, true);
        xhr.send();

        return _this;

    };

    this.response = function(files) {

        var data = [];

        files.forEach(function(file, i) {
            this.request(file, function (responseText) {
                data[i] = JSON.parse(responseText);
            });
        });

        return _this;
    };

};

// SIMULATE TEST
var myJsonFile = new JSONFile(),
    myPath     = './path/to/json/folder',
    myFiles    = ['foo.json', 'bar.json', 'baz.json'];

myJsonFile
    .request(myPath, myFiles)
    .response(myFiles);
