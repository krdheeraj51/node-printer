var page = require('webpage').create();
page.open('https://www.google.com/', function() {
  page.render('google.pdf');
  phantom.exit();
});