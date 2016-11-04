(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
         console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
    return result;
  }
   childProcess.spawn = mySpawn;
 })();


var express=require('express');
var app=express();
var router=express.Router();
var path=require('path');
// var router=express.Router();
var bodyPaser=require('body-parser');
var http = require('http');
//var mongojs=require('mongojs');
//var collections=['register'];
var gpio = require('rpi-gpio');

// gpio.setup(16,gpio.DIR_OUT, write);

// function write() {
//   gpio.write(16,true,function(err){
//     if(err) throw err;
//     console.log("written to pin");
//  });
// }


var gpio = require('rpi-gpio');

var PythonShell = require('python-shell');

var options = {
  mode: 'text',
   args: [30]
};
var port = Number(process.env.PORT || 3000)
var session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.use('/', express.static(__dirname+'/public'));
app.listen(port,'0.0.0.0',function(){
})


app.post('/glowbulbon', function(req, res)
{
  console.log("glowbulb on is called");
  //console.log(req.body);

  PythonShell.run('bulbon.py', function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log("finished executing python script");
  console.log(results);
});
res.json("done");
});
app.post('/glowbulboff', function(req, res)
{
  console.log("glowbulb off is called");
  //console.log(req.body);
  PythonShell.run('bulboff.py', function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log("finished executing python script");
  console.log(results);
});
res.json("done");
});


app.post('/bulbflicker', function(req, res)
{
var pin   = 16;
var delay = 300;
gpio.setup(pin, gpio.DIR_OUT, on);
function on() {
    setTimeout(function() {
        gpio.write(pin, 1, off);
    }, delay);
}
function off() {
        setTimeout(function() {
        gpio.write(pin, 0);
    }, delay);
}
res.json("on and off called once");
});

app.post('/bulbflickeroff', function(req, res)
{
var pin   = 16;
gpio.setup(pin, gpio.DIR_OUT, disp);
function disp() {
        gpio.write(pin, 0);
      }
      res.json("bulb flicker off called");
});

app.post('/glowled1', function(req, res)
{
  console.log("glowled1 on is called");
  //console.log(req.body);

  PythonShell.run('led1on.py', function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log("finished executing python script");
  console.log(results);
});
res.json("done");
});

app.post('/led1off', function(req, res)
{
  console.log("led1off on is called");
  //console.log(req.body);

  PythonShell.run('led1off.py', function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log("finished executing python script");
  console.log(results);
});
res.json("done");
});

app.post('/flickerled1on', function(req, res)
{
var pin   = 8;
var delay = 500;
 
gpio.setup(pin, gpio.DIR_OUT, on);
 
function on() {
    setTimeout(function() {
        gpio.write(pin, 1, off);
    }, delay);
}
 
function off() {
    setTimeout(function() {
        gpio.write(pin, 0);
    }, delay);
}
res.json("done");
});

app.post('/flickerled1off', function(req, res)
{
var pin   = 8;
gpio.setup(pin, gpio.DIR_OUT, displed1);
function displed1() {
        gpio.write(pin, 0);
      }
      res.json("flickeroff led 1 called");
});

app.post('/flickerled2on', function(req, res)
{
var pin   = 10;
var delay = 500;
 
gpio.setup(pin, gpio.DIR_OUT, on);
 
function on() {
    setTimeout(function() {
        gpio.write(pin, 1, off);
    }, delay);
}
 
function off() {
    setTimeout(function() {
        gpio.write(pin, 0);
    }, delay);
}
res.json("done");
});

app.post('/flickerled2off', function(req, res)
{
var pin   = 10;
gpio.setup(pin, gpio.DIR_OUT, displed2);
function displed2() {
        gpio.write(pin, 0);
      }
      res.json("flickeroff led 2 called");
});

app.post('/glowled2', function(req, res)
{
  console.log("glowled2 on is called");
  //console.log(req.body);

  PythonShell.run('led2on.py', function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log("finished executing python script");
  console.log(results);
});
res.json("done");
});

app.post('/led2off', function(req, res)
{
  console.log("led2off on is called");
  //console.log(req.body);

  PythonShell.run('led2off.py', function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log("finished executing python script");
  console.log(results);
});
res.json("done");
});

app.post('/glowfanon', function(req, res)
{
  console.log("glowfan on is called");
  console.log(req.body);
});

app.post('/glowfanoff', function(req, res)
{
  console.log("glowfan off is called");
  console.log(req.body);
});
 


