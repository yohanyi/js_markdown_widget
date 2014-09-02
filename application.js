var MarkdownTranslator = function(input, output, dictionary) {
  this.input = input;
  this.output = output;
  this.translation = "";
  this.dictionary = dictionary;
  this.keyMonitor();
};

MarkdownTranslator.prototype.keyMonitor = function() {
  var that = this;
  this.input.on("change keyup paste", function() {
    that.translate();
    that.draw();
  });
};

MarkdownTranslator.prototype.translate = function() {
  var charArray = this.input.val().split("");
  var returnString = "";
  var that = this;
  _.each(this.dictionary, function(value, key, dictionary) {
    _.map(charArray, function(char){
      console.log(key);
      console.log(value);
      console.log(that.input.val());
    })
  });
  this.translation = returnString;
};

MarkdownTranslator.prototype.draw = function() {
  this.output.empty();
  this.output.append(this.translation);
};

var Dictionary = {
  "*": ["<i>","</i>"],
  "_": ["<b>","<b>"]
};



mt = new MarkdownTranslator($('#mdi'), $('#mdo'), Dictionary);
