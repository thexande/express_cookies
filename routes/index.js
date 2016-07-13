var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/cookie', (req, res, next) => {
counted = 0
  if(req.cookies.count){
    counted = req.cookies.count += 1
  } else {
    counted = 1
  }
  req.cookies.count = counted
  res.cookie('count', counted)
  res.send(req.cookies)
})

router.route('/users/:name')
  .get((req, res, next) => {
    if(req.cookies[req.params.name]){
      // user has been here before
      res.render('index', {name: req.params.name, message: "welcome back"})
    } else {
      // user has not been here before
      res.cookie(req.params.name, "visited our site")
        res.render('index', {name: req.params.name, message:"welcome new user"})
    }
  })
module.exports = router;
