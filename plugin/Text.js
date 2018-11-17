BS.plugin('Text', {
  init: function(plugin, config) {
    plugin.textNode = document.createTextNode('');
    plugin.element.appendChild(plugin.textNode);

    plugin.config(config);
    this.hello('hello');
  }
  ,
  configurator: {
    text: function(plugin, value) {
      plugin.textNode.data = value.toString();
      this.hello('world');
    }
  }
  ,
  hello: function(x) { console.log(x); }
});
