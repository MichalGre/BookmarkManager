
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var ArticleRepository = require('./articleRepository').ArticleRepository;

var articleRepository= new ArticleRepository();

router.get('/', function(req, res, next) {
   articleRepository.findAll(function(err, docs){
    res.render('index.jade',{
        articles: docs,
    });
  })
});

router.post('/addBookmark', function(req, res, next){
   //res.send('Bookmark added: ' + req.body.bookmarkUrl);
   articleRepository.save({
    title:req.body.bookmarkUrl,
    body: req.body.bookmarkUrl
  }, function(error, docs){
    res.redirect('/');
  });
});

module.exports = router;
