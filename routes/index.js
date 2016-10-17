
/*
 * GET home page.
 */

exports.getHome = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.postHome = function(req, res){
  var buttonValue = req.param("buttonValue"),
      fullString = req.param("fullString");

  console.log("in  buttonclick");
  console.log(buttonValue);
  console.log(Number.isInteger(buttonValue));
  console.log(buttonValue + 1);
  var isInteger = parseInt(buttonValue);
  console.log(Number.isInteger(isInteger));
  console.log("in displayu value");
  fullString = fullString + buttonValue;

  var jsonResponse = {"fullString": fullString};
  res.send(jsonResponse);

};

exports.calculate = function(req, res) {
  var fullString = req.param("fullString");
      calc = eval(fullString);
  var jsonResponse = {"calc": calc};
  res.send(jsonResponse);
};
