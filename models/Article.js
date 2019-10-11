var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Url: {
    type: String,
    required: true
  },
  Summary:{
    type:String,
  },
});

let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
