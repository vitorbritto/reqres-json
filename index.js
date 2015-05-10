/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */

var JSONFile = function() {

    'use strict';

    var _this = this;

    if (!(this instanceof JSONFile)) {
        throw new Error('JSONFile needs to be called with the new keyword');
    }

    // BUILD METHODS
    this.request = function(path, filename, done) {

        var xhr = new XMLHTTPRequest();

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
