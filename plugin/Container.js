bs.plugin('Container', function(config) {
  this.plugin.contentNode = document.createElement('div');
  this.element.appendChild(this.plugin.contentNode);

  this.plugin.config(config);
}, {
  configurator: {
    content: function(plugin, value) {
      bs.make(plugin.contentNode, value);
    }
  }
});
