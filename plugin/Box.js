BS.plugin('Box', {
  init: function(config) {
    var plugin = this.plugin;
    plugin.contentNode = document.createElement('div');
    plugin.element.appendChild(plugin.contentNode);

    plugin.config(config);
  }
  ,
  configurator: {
    content: function(value) {
      BS.make(this.plugin.contentNode, value);
    }
  }
});
