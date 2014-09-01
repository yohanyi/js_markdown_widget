var MarkdownTranslator = function(input, output) {
  this.input = input;
  this.output = output;
  this.keyMonitor();
};

MarkdownTranslator.prototype.keyMonitor = function() {
  var that = this;
  this.input.on("change keyup paste", function() {
    that.translate();
  });
};

MarkdownTranslator.prototype.translate = function() {
  this.draw("<i>" + this.input.val() + "</i></p>");
};

MarkdownTranslator.prototype.draw = function(string) {
  this.output.empty();
  this.output.append(string);
};

mt = new MarkdownTranslator($('#mdi'), $('#mdo'));
