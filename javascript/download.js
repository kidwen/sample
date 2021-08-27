'use strict';

var http = require('http')
var fs = require('fs');
var download = function (url, filename, callback) {
    var request = http.get(url, function (response) {
        response.setTimeout(60000, function () {
            request.destroy();
        })
        if (response.statusCode === 200) {
            if (!fs.existsSync(filename)) {
                fs.writeFileSync(filename, '')
            }
            var file = fs.createWriteStream(filename);
            response.pipe(file);
            file.on('finish', function () {
                file.close();
            });
        } else {
            if (callback) {
                callback(response.statusMessage);
            }
        }
    }).on('error', function (error) {
        fs.unlink(filename, () => {
            if (callback) {
                callback(error.message);
            }
        });

    })
}

download('http://www.example.com/file/abc.txt', 'D:/1.txt', function (msg) { console.log(msg) });

