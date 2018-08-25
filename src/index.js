var Metalsmith = require("metalsmith");
var markdown = require("metalsmith-markdown");
var layouts = require("metalsmith-layouts");
var permalinks = require("metalsmith-permalinks");
var concat = require("metalsmith-concat");
var uglify = require("metalsmith-uglify");
var htmlMinifier = require("metalsmith-html-minifier");
var cleanCSS = require("metalsmith-clean-css");

Metalsmith(__dirname)
  .metadata({
    company: "Elegant Designs and Decor",
    title: "Event Design, Event Planning, Floral Artistry | Elegant Designs and Decor",
    description: "in Fairfax, VA. ",
    keywords: "fairfax",
    url: "https://edad.com/",
    phone: "",
    year: "2018"
  })
  .use(markdown())
  .use(permalinks())
  .use(
    layouts({
      engine: "handlebars"
    })
  )
  .source("./src")
  .destination("./build")
  .use(uglify())
  .use(htmlMinifier())
  .use(
    cleanCSS({
      files: "css/**/*.css",
      cleanCSS: {
        rebase: true
      }
    })
  )
  .clean(true) 
  .build(function(err, files) {
    if (err) { throw err; }
  });
