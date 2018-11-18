BS.plugin('Text', {
  init: function(config) {
    this.textNode = document.createTextNode('');
    this.element.appendChild(this.textNode);

    this.plugin.config(config);
    this.hello('hello');
  }
  ,
  configurator: {
    text: function(value) {
      this.textNode.data = value.toString();
      this.hello('world');
    }
  }
  ,
  hello: function(x) { console.log(x); }
});
