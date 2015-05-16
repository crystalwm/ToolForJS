/**
 * Created by John on 2015-05-15.
 */
var esprima = require('esprima');
var fs=require('fs');


fs.readFile('./public/javascripts/test.js',{encoding:'utf8'}, function (err, data) {
    if (err) throw err;
   console.log(typeof data);

    var ast=esprima.parse(data,{loc:true});
    console.log(ast);
   // console.log(typeof ast);  //object
  //   console.log(Object.prototype.toString(ast));  //  [object Object]

});




