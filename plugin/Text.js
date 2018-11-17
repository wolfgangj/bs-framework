BS.plugin('Text', {
  init: function(config) {
    var plugin = this.plugin;

    plugin.textNode = document.createTextNode('');
    plugin.element.appendChild(plugin.textNode);

    plugin.config(config);
    this.hello('hello');
  }
  ,
  configurator: {
    text: function(value) {
      this.plugin.textNode.data = value.toString();
      this.hello('world');
    }
  }
  ,
  hello: function(x) { console.log(x); }
});
