// Generated by CoffeeScript 1.6.3
var thisYear, yearDiff;

thisYear = function() {
  var dt;
  dt = new Date();
  return "" + ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][dt.getMonth()] + ", " + (dt.getFullYear());
};

yearDiff = function(x) {
  return alert("new Date().getFullYear() - " + x);
};

Prince.addScriptFunc('thisYear', thisYear);

Prince.addScriptFunc('yearDiff', yearDiff);
