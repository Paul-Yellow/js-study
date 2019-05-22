const fs = require("fs");

    var readFile = function(fileName) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, function(error, data) {
                if (error) return reject(error);
                resolve(data);
            });
        });
    };
    const asyncReadFile = async function () {
        const f1 = yield readFile("/Users/paul-yellow/2019/study/js-study/README.md");
        const f2 = yield readFile("/Users/paul-yellow/2019/study/js-study/doubt.md");
        console.log(f1.toString());
        console.log(f2.toString());
      };
    
      asyncReadFile()