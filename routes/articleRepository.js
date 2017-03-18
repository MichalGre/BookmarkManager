var ArticleRepository = function(){ }

ArticleRepository.prototype.someData = [];

ArticleRepository.prototype.findAll = function(callback)
{
    callback(null, this.someData);
}

ArticleRepository.prototype.get = function(id, callback)
{
    for( var i = this.someData.length - 1; i >= 0 ; i-- )
        if( this.someData[i]._id == id)
            return  callback(null, this.someData[i] );
    
    callback(null, null);
}

ArticleRepository.prototype.save = function(articles, callback)
{
    var article = null;
    if( typeof(articles.length) == "undefined"     )
        articles = [articles];
    
    for( var i = 0; i < articles.length; ++i)
    {
        article = articles[i];
        article.CreatedAt = new Date();
        article._id = this.someData.length;

        this.someData[this.someData.length] = article;
    }

    callback(null, articles);
}

new ArticleRepository().save([{title:"first Article", body: "First article body"},
{title: "second article", body: "second article body"}], function(error, articles){});

exports.ArticleRepository = ArticleRepository;